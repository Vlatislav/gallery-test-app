import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImageInfo } from 'src/app/shared/interfaces/image.interface';
import { ImageService } from '../../shared/services/image.service';

@Component({
  selector: 'gallery-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  public id: string;
  public imageInfo: ImageInfo;

  private sub: any;

  constructor(
    private imageSvc: ImageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.sub = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.imageSvc.getDetailImageInfo().subscribe((data) => {
      if (data) {
        this.imageInfo = data;
      }
    });
  }

  ngOnInit(): void {
    this.imageSvc.getImageInfoById(this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
