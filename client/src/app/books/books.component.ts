import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

import { Book } from '../book'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [
    { provide: BooksService, useClass: BooksService }
  ]
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private booksService: BooksService) { 
  }

  ngOnInit() {
    this.booksService.getBooks()
      .subscribe(book => this.books = book.books));

    }



}
