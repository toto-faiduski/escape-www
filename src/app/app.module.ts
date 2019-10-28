import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecentTasksComponent } from './recent-tasks/recent-tasks.component';
import { CurrentTasksComponent } from './current-tasks/current-tasks.component';
import { ErrorsExtractTextPdfComponent } from './errors-extract-text-pdf/errors-extract-text-pdf.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecentTasksComponent,
    CurrentTasksComponent,
    ErrorsExtractTextPdfComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
