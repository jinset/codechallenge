import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { IPost } from '../interface/call.interface';

@Injectable({
  providedIn: 'root',
})
export default class ApicallService {
  private httpClient = inject(HttpClient);
  private url = 'https://jsonplaceholder.typicode.com/';

  httpCall() {
    return this.httpClient.get<IPost[]>(`${this.url}posts`).pipe(
      catchError((error) => {
        console.error('An error occurred:', error.message);
        return throwError(() => new Error('Something bad happened.'));
      })
    );
  }
}
