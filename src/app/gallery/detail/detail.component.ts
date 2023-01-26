import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/shared/interfaces/image.interface';
import { ImageService } from '../../shared/services/image.service';

@Component({
  selector: 'gallery-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  id!: number;
  private sub: any;

  public image: Image;

  constructor(
    private imageSvc: ImageService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.sub = this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.imageSvc.getCurrentImageInfo().subscribe((data) => {
      if (data) {
        this.image = data;
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
    let a = document.createElement('a');
    a.setAttribute('href', this.image!.url);
    a.setAttribute('target', 'blank');
    a.click();
  }

  onBackClick() {
    this.router.navigate([`gallery`]);
  }
}
