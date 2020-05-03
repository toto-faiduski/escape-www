import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecentTasksComponent } from './recent-tasks/recent-tasks.component';
import { CurrentTasksComponent } from './current-tasks/current-tasks.component';
import { ErrorsExtractTextPdfComponent } from './errors-extract-text-pdf/errors-extract-text-pdf.component';
import { ErrorsEditionCComponent } from './errors-edition-c/errors-edition-c.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecentTasksComponent,
    CurrentTasksComponent,
    ErrorsExtractTextPdfComponent,
    ErrorsEditionCComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, {
    //     apiBase: 'api/v2/',
    //     dataEncapsulation: false,
    //     passThruUnknownUrl: true,
    //     put204: false // return entity after PUT/update
    //   }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
