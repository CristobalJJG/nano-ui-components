import { Component, HostBinding, Input } from '@angular/core';

export type NanoButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type NanoButtonSize = 'sm' | 'md' | 'lg';
export type NanoButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'nano-button',
  standalone: true,
  templateUrl: './nano-button.html',
  styleUrl: './nano-button.css',
})
export class NanoButtonComponent {
  @Input() variant: NanoButtonVariant = 'primary';
  @Input() size: NanoButtonSize = 'md';
  @Input() type: NanoButtonType = 'button';
  @Input() disabled = false;
  @Input() fullWidth = false;
  @Input() label = '';

  @HostBinding('class.host-full-width')
  get fullWidthHostClass(): boolean {
    return this.fullWidth;
  }
}
