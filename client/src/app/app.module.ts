import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AmexioWidgetModule } from 'amexio-ng-extensions';
import { AmexioChartsModule, AmexioDashBoardModule, AmexioEnterpriseModule, AmexioMapModule } from 'amexio-ng-extensions';



import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { BookCardComponent } from './book-card/book-card.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BooksComponent,
    AuthorsComponent,
    BookCardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AmexioChartsModule,
    AmexioWidgetModule,
    FormsModule,
    AmexioDashBoardModule,
    AmexioEnterpriseModule,
    AmexioMapModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
