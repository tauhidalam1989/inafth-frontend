import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface ConfirmDialogData {
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  type?: 'warning' | 'danger' | 'info';
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  @Input() data: ConfirmDialogData = {
    title: 'تأكيد',
    message: 'هل أنت متأكد من هذا الإجراء؟',
    confirmText: 'تأكيد',
    cancelText: 'إلغاء',
    type: 'info'
  };
  
  @Input() visible: boolean = false;
  @Output() confirmed = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  onConfirm(): void {
    this.confirmed.emit();
  }

  onCancel(): void {
    this.cancelled.emit();
  }

  onOverlayClick(): void {
    this.cancelled.emit();
  }
}
