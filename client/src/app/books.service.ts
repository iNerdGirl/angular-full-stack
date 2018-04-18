import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Book } from './book';

@Injectable()
export class BooksService {
  private booksUrl = 'https://rocky-temple-33519.herokuapp.com/books';

  constructor(
    private http: HttpClient,
  ) {}

  public getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl);
  }
}
