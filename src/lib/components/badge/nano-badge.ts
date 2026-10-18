import { Component, Input } from '@angular/core';

export type NanoBadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type NanoBadgeSize = 'sm' | 'md';

@Component({
  selector: 'nano-badge',
  standalone: true,
  templateUrl: './nano-badge.html',
  styleUrl: './nano-badge.css',
})
export class NanoBadgeComponent {
  @Input() variant: NanoBadgeVariant = 'neutral';
  @Input() size: NanoBadgeSize = 'md';
  @Input() dot = false;
  @Input() pill = true;
  @Input() label = '';
}
