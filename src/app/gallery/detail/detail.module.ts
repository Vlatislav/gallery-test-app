import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [DetailComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [DetailComponent],
})
export class DetailModule {}
