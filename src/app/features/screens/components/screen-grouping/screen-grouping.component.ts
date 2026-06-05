import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslationService } from '../../../../core/services/translation.service';
import { ScreenService, Screen, ScreenGroup, CreateScreenRequest } from '../../../../core/services/screen.service';

@Component({
  selector: 'app-screen-grouping',
  templateUrl: './screen-grouping.component.html',
  styleUrls: ['./screen-grouping.component.scss']
})
export class ScreenGroupingComponent implements OnInit {
  currentLanguage: 'ar' | 'en' = 'ar';
  screens: Screen[] = [];
  groups: ScreenGroup[] = [];
  ungroupedScreens: Screen[] = [];
  draggedScreen: Screen | null = null;
  showCreateGroupModal = false;
  newGroupName = '';
  newGroupDescription = '';
  showEditGroupModal = false;
  editingGroupId: number | null = null;
  editingGroupName = '';
  editingGroupDescription = '';

  constructor(
    private languageService: LanguageService,
    private translationService: TranslationService,
    private screenService: ScreenService
  ) {}

  ngOnInit(): void {
    this.languageService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
    });
    this.currentLanguage = this.languageService.getSavedLanguage();
    this.loadData();
  }

  loadData(): void {
    this.screenService.getScreens().subscribe({
      next: (screens) => {
        this.screens = screens;
        this.updateUngroupedScreens();
      },
      error: (error) => {
        console.error('Error loading screens:', error);
      }
    });

    this.screenService.getScreenGroups().subscribe({
      next: (groups) => {
        this.groups = groups;
      },
      error: (error) => {
        console.error('Error loading groups:', error);
      }
    });
  }

  updateUngroupedScreens(): void {
    this.ungroupedScreens = this.screens.filter(screen => !screen.groupId);
  }

  getScreensInGroup(groupId: number): Screen[] {
    return this.screens.filter(screen => screen.groupId === groupId);
  }

  // Drag and Drop handlers
  onDragStart(event: DragEvent, screen: Screen): void {
    this.draggedScreen = screen;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.setData('text/plain', screen.id.toString());
    }
    if (event.target) {
      (event.target as HTMLElement).classList.add('dragging');
    }
  }

  onDragEnd(event: DragEvent): void {
    if (event.target) {
      (event.target as HTMLElement).classList.remove('dragging');
    }
    this.draggedScreen = null;
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    if (event.dataTransfer) {
      event.dataTransfer.dropEffect = 'move';
    }
    if (event.currentTarget) {
      (event.currentTarget as HTMLElement).classList.add('drag-over');
    }
  }

  onDrop(event: DragEvent, groupId: number | null): void {
    event.preventDefault();
    if (event.currentTarget) {
      (event.currentTarget as HTMLElement).classList.remove('drag-over');
    }

    if (!this.draggedScreen) return;

    const screenId = this.draggedScreen.id;
    const updateData: CreateScreenRequest = {
      name: this.draggedScreen.name,
      groupId: groupId || null
    };

    this.screenService.updateScreen(screenId, updateData).subscribe({
      next: (updatedScreen) => {
        // Update local screen data
        const index = this.screens.findIndex(s => s.id === screenId);
        if (index > -1) {
          this.screens[index] = updatedScreen;
        }
        this.updateUngroupedScreens();
      },
      error: (error) => {
        console.error('Error updating screen group:', error);
        alert('Failed to move screen: ' + (error.error?.error || error.message));
      }
    });
  }

  removeScreenFromGroup(screenId: number, groupId: number): void {
    const screen = this.screens.find(s => s.id === screenId);
    if (!screen) return;

    const updateData: CreateScreenRequest = {
      name: screen.name,
      groupId: null
    };

    this.screenService.updateScreen(screenId, updateData).subscribe({
      next: (updatedScreen) => {
        const index = this.screens.findIndex(s => s.id === screenId);
        if (index > -1) {
          this.screens[index] = updatedScreen;
        }
        this.updateUngroupedScreens();
      },
      error: (error) => {
        console.error('Error removing screen from group:', error);
        alert('Failed to remove screen from group: ' + (error.error?.error || error.message));
      }
    });
  }

  openCreateGroupModal(): void {
    this.showCreateGroupModal = true;
    this.newGroupName = '';
    this.newGroupDescription = '';
  }

  createGroup(): void {
    if (!this.newGroupName.trim()) return;
    this.screenService.createScreenGroup(this.newGroupName.trim(), this.newGroupDescription.trim() || undefined).subscribe({
      next: (group) => {
        this.groups.push(group);
        this.showCreateGroupModal = false;
        this.newGroupName = '';
        this.newGroupDescription = '';
      },
      error: (error) => {
        console.error('Error creating group:', error);
        alert('Failed to create group: ' + (error.error?.error || error.message));
      }
    });
  }

  openEditGroupModal(group: ScreenGroup): void {
    this.editingGroupId = group.id;
    this.editingGroupName = group.name;
    this.editingGroupDescription = group.description || '';
    this.showEditGroupModal = true;
  }

  closeEditGroupModal(): void {
    this.showEditGroupModal = false;
    this.editingGroupId = null;
    this.editingGroupName = '';
    this.editingGroupDescription = '';
  }

  saveEditGroup(): void {
    if (this.editingGroupId == null || !this.editingGroupName.trim()) return;
    this.screenService.updateScreenGroup(
      this.editingGroupId,
      this.editingGroupName.trim(),
      this.editingGroupDescription.trim() || undefined
    ).subscribe({
      next: (updated) => {
        const idx = this.groups.findIndex(g => g.id === this.editingGroupId);
        if (idx > -1) this.groups[idx] = updated;
        this.closeEditGroupModal();
        alert(this.getTranslation('groupUpdated') || 'Group updated successfully.');
      },
      error: (err) => {
        console.error('Error updating group:', err);
        alert(err.error?.error || err.message || this.getTranslation('errorUpdatingGroup') || 'Failed to update group.');
      }
    });
  }

  deleteGroup(groupId: number): void {
    if (!confirm(this.getTranslation('confirmDeleteGroup') || 'Are you sure you want to delete this group?')) {
      return;
    }
    this.screenService.deleteScreenGroup(groupId).subscribe({
      next: () => {
        this.loadData();
        alert(this.getTranslation('groupDeleted') || 'Group deleted successfully.');
      },
      error: (err) => {
        console.error('Error deleting group:', err);
        alert(err.error?.error || err.message || this.getTranslation('errorDeletingGroup') || 'Failed to delete group.');
      }
    });
  }

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key as any, this.currentLanguage);
  }
}
