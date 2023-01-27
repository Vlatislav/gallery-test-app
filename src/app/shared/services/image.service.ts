import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImageInfo } from '../interfaces/image.interface';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private readonly listImageInfos$ = new BehaviorSubject<ImageInfo[] | null>(
    null
  );
  private readonly listOfLazyLoadImageInfos$ = new BehaviorSubject<
    ImageInfo[] | null
  >(null);
  private readonly detailImageInfo$ = new BehaviorSubject<ImageInfo | null>(
    null
  );

  constructor(private http: HttpClient) {}

  getListImageInfosByLimit(limit: number): void {
    this.http
      .get<ImageInfo[]>(`https://picsum.photos/v2/list?limit=${limit}`)
      .subscribe((data) => {
        this.listOfLazyLoadImageInfos$.next(data.slice(5, data.length));
        this.listImageInfos$.next(data);
      });
  }

  getImageInfoById(id: string): void {
    this.listImageInfos$.subscribe((data) => {
      if (data) {
        const imageInfoById = data.find((image) => image.id === id);
        imageInfoById && this.detailImageInfo$.next(imageInfoById);
      }
    });
  }

  getListImageInfos() {
    return this.listImageInfos$;
  }

  getListOfLazyLoadImageInfos() {
    return this.listOfLazyLoadImageInfos$;
  }

  getDetailImageInfo() {
    return this.detailImageInfo$;
  }
}
