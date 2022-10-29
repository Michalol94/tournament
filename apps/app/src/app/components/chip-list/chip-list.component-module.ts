import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { ChipListComponent } from './chip-list.component';

@NgModule({
  imports: [MatChipsModule, CommonModule],
  declarations: [ChipListComponent],
  providers: [],
  exports: [ChipListComponent]
})
export class ChipListComponentModule {
}
