import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AtomComponentComponent } from './atom-component/atom-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AtomComponentComponent],
  exports: [AtomComponentComponent]
})
export class Library1Module {}
