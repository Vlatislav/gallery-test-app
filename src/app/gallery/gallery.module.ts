import { DetailModule } from './detail/detail.module';
import { GalleryRoutingModule } from './gallery-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ListModule } from './list/list.module';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GalleryRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    ListModule,
    DetailModule
  ],
})
export class GalleryModule {}
