import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface NanoSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

@Component({
  selector: 'nano-select',
  standalone: true,
  templateUrl: './nano-select.html',
  styleUrl: './nano-select.css',
})
export class NanoSelectComponent {
  @Input() id = `nano-select-${crypto.randomUUID()}`;
  @Input() label = '';
  @Input() hint = '';
  @Input() error = '';
  @Input() value = '';
  @Input() placeholder = 'Selecciona una opción';
  @Input() options: readonly NanoSelectOption[] = [];
  @Input() disabled = false;
  @Input() required = false;
  @Output() valueChange = new EventEmitter<string>();

  onChange(event: Event): void {
    const target = event.target;
    if (target instanceof HTMLSelectElement) {
      this.value = target.value;
      this.valueChange.emit(target.value);
    }
  }
}
