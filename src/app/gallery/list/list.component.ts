import { Component, OnInit } from '@angular/core';
import { ImageInfo } from 'src/app/shared/interfaces/image.interface';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'gallery-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  sliderValue: number = 5;
  imageInfos: ImageInfo[] | null;
  lazyLoadImageInfos: ImageInfo[] | null;

  constructor(private imageSvc: ImageService) {
    this.imageSvc.getListImageInfos().subscribe((data) => {
      if (data) {
        this.imageInfos = data;
      } else {
        this.imageInfos = null;
      }
    });

    this.imageSvc.getListOfLazyLoadImageInfos().subscribe((data) => {
      if (data) {
        this.lazyLoadImageInfos = data;
      } else {
        this.lazyLoadImageInfos = null;
      }
    });
  }

  ngOnInit() {
    this.imageSvc.getListImageInfosByLimit(5);
  }

  updateSetting() {
    this.imageSvc.getListImageInfosByLimit(this.sliderValue);
  }
}
