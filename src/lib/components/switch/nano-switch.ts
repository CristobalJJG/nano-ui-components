import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nano-switch',
  standalone: true,
  templateUrl: './nano-switch.html',
  styleUrl: './nano-switch.css',
})
export class NanoSwitchComponent {
  @Input() id = `nano-switch-${crypto.randomUUID()}`;
  @Input() label = '';
  @Input() description = '';
  @Input() checked = false;
  @Input() disabled = false;
  @Output() checkedChange = new EventEmitter<boolean>();

  onChange(event: Event): void {
    const target = event.target;
    if (target instanceof HTMLInputElement) {
      this.checked = target.checked;
      this.checkedChange.emit(target.checked);
    }
  }
}
