import { Component, Input } from '@angular/core';

@Component({
  selector: 'nano-card',
  standalone: true,
  templateUrl: './nano-card.html',
  styleUrl: './nano-card.css',
})
export class NanoCardComponent {
  @Input() heading = '';
  @Input() description = '';
  @Input() padding: 'sm' | 'md' | 'lg' = 'md';
  @Input() interactive = false;
}
