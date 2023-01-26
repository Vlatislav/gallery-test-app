import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pageNumberPipe' })
export class PageNumberPipe implements PipeTransform {
  transform(value: number): string {
    return `${value + 1} - ${value + 5}`;
  }
}
