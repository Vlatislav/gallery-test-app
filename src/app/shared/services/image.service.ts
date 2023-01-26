import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Image } from '../interfaces/image.interface';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private readonly currentImageInfo$ = new BehaviorSubject<Image | null>(null);
  constructor(private http: HttpClient) {}

  getImageInfoById(id: number): void {
    this.http
      .get<Image>(`https://picsum.photos/id/${id}/info`)
      .subscribe((data) => {
        this.currentImageInfo$.next(data);
      });
  }

  public getCurrentImageInfo() {
    return this.currentImageInfo$;
  }
}
