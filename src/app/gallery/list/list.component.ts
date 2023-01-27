import { Component, OnInit } from '@angular/core';
import { ImageInfo } from 'src/app/shared/interfaces/image.interface';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'gallery-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public sliderValue: number = 5;
  public imageInfos: ImageInfo[] | null;
  public lazyLoadImageInfos: ImageInfo[] | null;

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

  public updateSetting() {
    this.imageSvc.getListImageInfosByLimit(this.sliderValue);
  }
}
