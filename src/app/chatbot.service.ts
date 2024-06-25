import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  private apiUrl = 'https://localhost:5001/api/ChatPot'; // Adjust URL as per your API endpoint

  constructor(private http: HttpClient) {}

  sendMessage(text: string): Observable<any> {
    const payload = { promptStr: text };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post<any>(this.apiUrl, payload, { headers })
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
