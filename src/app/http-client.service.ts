import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  get(url: string, httpOptions = {}): Observable<any> {
    return this.http.get<any>(url, httpOptions).pipe(
      catchError(this.handleError<any>('getHttp', []))
    );
  }

  post(url: string, httpOptions = {}, params = {}): Observable<any> {
    return this.http.post<any>(url, httpOptions, params).pipe(
      catchError(this.handleError<any>('getHttp', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
