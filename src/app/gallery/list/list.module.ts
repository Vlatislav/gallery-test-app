import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from '@angular/router';
import { PageNumberPipe } from 'src/app/shared/pipes/page-number.pipe';
import { CardModule } from './../../shared/components/card/card.module';
import { ListComponent } from './list.component';
@NgModule({
  declarations: [ListComponent, PageNumberPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    MatSliderModule,
    CardModule,
  ],
})
export class ListModule {}
