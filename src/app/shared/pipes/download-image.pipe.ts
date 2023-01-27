import { Pipe, PipeTransform } from '@angular/core';
import { ImageInfo } from '../interfaces/image.interface';

@Pipe({
  name: 'downloadImage',
})
export class DownloadImagePipe implements PipeTransform {
  transform(imageInfo: ImageInfo): boolean {
    return imageInfo.height > 2000 && imageInfo.width > 2000;
  }
}
