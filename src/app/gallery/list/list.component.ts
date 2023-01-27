import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ImageInfo } from 'src/app/shared/interfaces/image.interface';
import { ImageService } from 'src/app/shared/services/image.service';

@Component({
  selector: 'gallery-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  sliderValue: number = 5;
  imageInfos: ImageInfo[] | null;
  lazyLoadImageInfos: ImageInfo[] | null;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private imageSvc: ImageService) {
    this.imageSvc
      .getListImageInfos()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (data) {
          this.imageInfos = data;
        } else {
          this.imageInfos = null;
        }
      });

    this.imageSvc
      .getListOfLazyLoadImageInfos()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (data) {
          this.lazyLoadImageInfos = data;
        } else {
          this.lazyLoadImageInfos = null;
        }
      });
  }

  ngOnInit() {
    this.imageSvc.getListImageInfosByLimit(5, true);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  updateSetting() {
    this.imageSvc.getListImageInfosByLimit(this.sliderValue);
  }
}
