import { Component, EventEmitter, Input, Output } from '@angular/core';

export type NanoInputType =
  | 'text'
  | 'email'
  | 'password'
  | 'search'
  | 'url'
  | 'tel'
  | 'number'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'color';

@Component({
  selector: 'nano-text-input',
  standalone: true,
  templateUrl: './nano-text-input.html',
  styleUrl: './nano-text-input.css',
})
export class NanoTextInputComponent {
  @Input() id = `nano-input-${crypto.randomUUID()}`;
  @Input() label = '';
  @Input() hint = '';
  @Input() error = '';
  @Input() type: NanoInputType = 'text';
  @Input() value = '';
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() required = false;
  @Input() showPassword = false;
  @Output() valueChange = new EventEmitter<string>();

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  onInput(event: Event): void {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.value = target.value;
      this.valueChange.emit(target.value);
    }
  }
}
