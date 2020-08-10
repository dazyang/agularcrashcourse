import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MediaItemService {
  constructor(private http: HttpClient) {}

  get(medium: string) {
    const getOptions = {
      params: { medium }
    };
  //  the http get method returns an Observable of http responses. The get method support <generics>, a TS syntax to tell the method what type of object it will return at the point where you wrtie your method call
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
  //  map method expects a function as its argument
    .pipe(map((response: MediaItemsResponse) => {
      return response.mediaItems;
    }),
      catchError(this.handleError)
    );
  }
  //  add() can take in a media item and push it onto media items array
  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem)
      .pipe(catchError(this.handleError))
  }
  delete(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`)
      .pipe(catchError(this.handleError))
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error.message);
    return throwError('Try again')
  }
}

interface MediaItemsResponse {
  mediaItems: MediaItem[];
}

export interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}
