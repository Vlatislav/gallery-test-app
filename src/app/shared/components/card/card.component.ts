import { Component, Input } from '@angular/core';
import { Image } from '../../interfaces/image.interface';
@Component({
  selector: 'gallery-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() image: Image | undefined;
  onClick() {
    let a = document.createElement('a');
    a.setAttribute('href', this.image!.url);
    a.setAttribute('target', 'blank');
    a.click();
  }
}
