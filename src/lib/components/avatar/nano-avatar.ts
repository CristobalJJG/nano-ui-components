import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

export type NanoAvatarSize = 'sm' | 'md' | 'lg' | 'xl';

@Component({
  selector: 'nano-avatar',
  standalone: true,
  templateUrl: './nano-avatar.html',
  styleUrl: './nano-avatar.css',
})
export class NanoAvatarComponent implements OnChanges {
  @Input() name = '';
  @Input() src = '';
  @Input() size: NanoAvatarSize = 'md';
  @Input() status: 'online' | 'away' | 'offline' | '' = '';
  imageFailed = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['src']) {
      this.imageFailed = false;
    }
  }

  get initials(): string {
    return this.name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase();
  }

  onImageError(): void {
    this.imageFailed = true;
  }
}
