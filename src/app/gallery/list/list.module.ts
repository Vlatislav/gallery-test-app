import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MatSliderModule],
})
export class ListModule {}
