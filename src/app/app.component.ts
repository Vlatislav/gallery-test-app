import { Component, OnInit } from '@angular/core';
import { ImageService } from './shared/services/image.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private imageSvc: ImageService) {}

  ngOnInit(): void {
    this.imageSvc.getListOfAllImageInfos();
  }
}
