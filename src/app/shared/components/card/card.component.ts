import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ImageInfo } from '../../interfaces/image.interface';
@Component({
  selector: 'gallery-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnChanges {
  flag = false;
  isTestDivScrolledIntoView: boolean;

  @Input() image: ImageInfo | undefined;
  @Input() lazy: boolean;

  @ViewChild('imageDiv', { static: false })
  private imageDiv: ElementRef<HTMLDivElement>;

  constructor(private router: Router) {}

  ngOnChanges() {
    if (!this.lazy && !this.flag) {
      this.flag = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  isScrolledIntoView() {
    if (this.imageDiv && this.lazy && !this.flag) {
      const rect = this.imageDiv.nativeElement.getBoundingClientRect();
      const topShown = rect.top >= 0;
      const bottomShown = rect.bottom <= window.innerHeight;
      this.isTestDivScrolledIntoView = topShown && bottomShown;
      this.flag = this.isTestDivScrolledIntoView ? true : false;
    }
  }

  @HostListener('mouseover', ['$event'])
  isMouseOverIntoView() {
    const hasVScroll = document.body.scrollHeight > document.body.clientHeight;
    if (hasVScroll) this.isScrolledIntoView();
  }

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
