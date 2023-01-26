import { Component, Input, OnInit } from '@angular/core';
import { Image } from 'src/app/shared/interfaces/image.interface';
import { ImageService } from '../../shared/services/image.service';

@Component({
  selector: 'gallery-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(private imageSvc: ImageService) {}

  @Input() id: number | undefined;
  public image: Image | undefined;

  ngOnInit(): void {
    this.id = 15;

    if (this.id) {
      this.image = this.imageSvc.getImageInfoById(this.id);
    }
  }
}
