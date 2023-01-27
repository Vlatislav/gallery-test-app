import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { ImageInfo } from '../interfaces/image.interface';

@Injectable({
  providedIn: 'root',
})
export class ImageService implements OnDestroy {
  private readonly listImageInfos$ = new BehaviorSubject<ImageInfo[] | null>(
    null
  );
  private readonly listOfLazyLoadImageInfos$ = new BehaviorSubject<
    ImageInfo[] | null
  >(null);
  private readonly detailImageInfo$ = new BehaviorSubject<ImageInfo | null>(
    null
  );

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getListImageInfosByLimit(limit: number, initialCall = false): void {
    this.http
      .get<ImageInfo[]>(`https://picsum.photos/v2/list?limit=${limit}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.listOfLazyLoadImageInfos$.next(data.slice(5, data.length));
        initialCall && this.listImageInfos$.next(data.slice(0, 5));
      });
  }

  getImageInfoById(id: string): void {
    this.listImageInfos$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
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
