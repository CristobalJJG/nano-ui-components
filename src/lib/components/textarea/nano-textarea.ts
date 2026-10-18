import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'nano-textarea',
  standalone: true,
  templateUrl: './nano-textarea.html',
  styleUrl: './nano-textarea.css',
})
export class NanoTextareaComponent {
  @Input() id = `nano-textarea-${crypto.randomUUID()}`;
  @Input() label = '';
  @Input() hint = '';
  @Input() error = '';
  @Input() value = '';
  @Input() placeholder = '';
  @Input() rows = 4;
  @Input() disabled = false;
  @Input() required = false;
  @Input() resize: 'none' | 'vertical' | 'both' = 'vertical';
  @Output() valueChange = new EventEmitter<string>();

  onInput(event: Event): void {
    const target = event.target;
    if (target instanceof HTMLTextAreaElement) {
      this.value = target.value;
      this.valueChange.emit(target.value);
    }
  }
}
