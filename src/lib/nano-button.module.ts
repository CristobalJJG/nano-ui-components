import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NanoButtonComponent } from './nano-button/nano-button.component';

@NgModule({
  declarations: [NanoButtonComponent],
  imports: [CommonModule],
  exports: [NanoButtonComponent]
})
export class NanoButtonModule { }