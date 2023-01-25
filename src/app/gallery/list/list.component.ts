import { Component } from '@angular/core';

@Component({
  selector: 'gallery-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  formatLabel(value: number): string {
    return `${value}`;
  }
}
