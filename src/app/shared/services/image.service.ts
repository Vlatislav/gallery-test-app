import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { ImageInfo } from '../interfaces/image.interface';

@Injectable({
  providedIn: 'root',
})
export class ImageService implements OnDestroy {
  private listOfAllImageInfos: ImageInfo[] | null = null;

  private readonly listOfShowedImageInfos$ = new BehaviorSubject<
    ImageInfo[] | null
  >(null);
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

  getListOfAllImageInfos(): void {
    this.http
      .get<ImageInfo[]>(`https://picsum.photos/v2/list?limit=25`)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.listOfAllImageInfos = data;
        this.listOfShowedImageInfos$.next(this.listOfAllImageInfos.slice(0, 5));
      });
  }

  getListOfShowedImageInfosByLimit(limit: number): void {
    if (this.listOfAllImageInfos) {
      this.listOfLazyLoadImageInfos$.next(
        this.listOfAllImageInfos.slice(5, limit)
      );
    }
  }

  getImageInfoById(id: string): void {
    this.detailImageInfo$.next(null);

    this.detailImageInfo$.next(
      this.listOfAllImageInfos!.find((i) => i.id == id) ?? null
    );
  }

  getListImageInfos() {
    return this.listOfShowedImageInfos$;
  }

  getListOfLazyLoadImageInfos() {
    return this.listOfLazyLoadImageInfos$;
  }

  getDetailImageInfo() {
    return this.detailImageInfo$;
  }
}
