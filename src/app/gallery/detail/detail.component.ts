import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ImageInfo } from 'src/app/shared/interfaces/image.interface';
import { ImageService } from '../../shared/services/image.service';

@Component({
  selector: 'gallery-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit, OnDestroy {
  id: string;
  imageInfo: ImageInfo;

  destroy$: Subject<boolean> = new Subject<boolean>();

  private sub: any;

  constructor(
    private imageSvc: ImageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.id = params['id'];
    });
    this.imageSvc
      .getDetailImageInfo()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        if (data) {
          this.imageInfo = data;
        }
      });
  }

  ngOnInit(): void {
    this.imageSvc.getImageInfoById(this.id);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onDownloadClick() {
    if (this.imageInfo) {
      let a = document.createElement('a');
      a.setAttribute('href', this.imageInfo.url);
      a.setAttribute('target', 'blank');
      a.click();
    }
  }

  onBackClick() {
    this.router.navigate([`gallery`]);
  }
}
