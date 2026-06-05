import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface AlertDialogData {
  title?: string;
  message: string;
  confirmText?: string;
  type?: 'success' | 'error' | 'warning' | 'info';
}

@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent {
  @Input() data: AlertDialogData = {
    message: '',
    confirmText: 'OK',
    type: 'info'
  };
  
  @Input() visible: boolean = false;
  @Output() closed = new EventEmitter<void>();

  getTitle(): string {
    if (this.data.title) return this.data.title;
    switch (this.data.type) {
      case 'success': return 'Success';
      case 'error': return 'Error';
      case 'warning': return 'Warning';
      default: return 'Information';
    }
  }

  getIcon(): string {
    switch (this.data.type) {
      case 'success': return 'fas fa-check-circle';
      case 'error': return 'fas fa-exclamation-circle';
      case 'warning': return 'fas fa-exclamation-triangle';
      default: return 'fas fa-info-circle';
    }
  }

  onConfirm(): void {
    this.closed.emit();
  }

  onOverlayClick(): void {
    this.closed.emit();
  }
}

