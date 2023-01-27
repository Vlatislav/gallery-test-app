import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { PipeModule } from '../../shared/pipes/pipe.module';
import { ButtonModule } from './../../shared/components/button/button.module';
import { DetailComponent } from './detail.component';

@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    ButtonModule,
    PipeModule,
  ],
  exports: [DetailComponent],
})
export class DetailModule {}
