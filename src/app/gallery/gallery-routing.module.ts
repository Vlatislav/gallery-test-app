import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ListComponent,
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
