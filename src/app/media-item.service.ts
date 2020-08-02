import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class MediaItemService {
         constructor(private http: HttpClient) {}

         get(medium) {
           const getOptions = {
             params: { medium }
           };
          //  the http get method returns an Observable of http responses. The get method support <generics>, a TS syntax to tell the method what type of object it will return at the point where you wrtie your method call
           return this.http.get<MediaItemResponse>('mediaitems', getOptions)
          //  map method expects a function as its argument
           .pipe(map(response => { return response.mediaItems; }));
         }
        //  add() can take in a media item and push it onto media items array
         add(mediaItem) {
          return this.http.post('mediaitems', mediaItem)
         }
         delete(mediaItem) {
         return this.http.delete(`mediaitems/${mediaItem.id}`)
          }
         }

       interface MediaItem {
         id: number;
         name: string;
         medium: string;
         category: string;
         year: number;
         isFavorite: boolean;
       }

       interface MediaItemResponse {
         mediaItems: MediaItem[];
       }
