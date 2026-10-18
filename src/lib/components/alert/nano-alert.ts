import { Component, EventEmitter, Input, Output } from '@angular/core';

export type NanoAlertVariant = 'info' | 'success' | 'warning' | 'danger';

@Component({
  selector: 'nano-alert',
  standalone: true,
  templateUrl: './nano-alert.html',
  styleUrl: './nano-alert.css',
})
export class NanoAlertComponent {
  @Input() variant: NanoAlertVariant = 'info';
  @Input() title = '';
  @Input() message = '';
  @Input() dismissible = false;
  @Output() dismissed = new EventEmitter<void>();
}
