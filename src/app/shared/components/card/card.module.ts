import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { ButtonModule } from './../button/button.module';
import { CardComponent } from './card.component';
@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, ReactiveFormsModule, MatCardModule, ButtonModule],
  exports: [CardComponent],
})
export class CardModule {}
