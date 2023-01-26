import { Injectable } from '@angular/core';
import { Image } from '../interfaces/image.interface';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor() {}

  getImageInfoById(id: number): Image {
    console.log('🚀 ~ getImageInfoById ~ ', id);

    return {
      id: '29',
      author: 'Go Wild',
      width: 4000,
      height: 2670,
      url: 'https://unsplash.com/photos/V0yAek6BgGk',
      download_url: 'https://picsum.photos/id/29/4000/2670',
    };
  }
}
