import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from '../../interfaces/image.interface';
@Component({
  selector: 'gallery-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() image: Image | undefined;

  constructor(private router: Router) {}

  onDownloadClick() {
    let a = document.createElement('a');
    a.setAttribute('href', this.image!.url);
    a.setAttribute('target', 'blank');
    a.click();
  }

  onImageClick() {
    if (this.image) {
      this.router.navigate([`gallery/detail`, this.image!.id]);
    }
  }
}
