import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from './material/material.module';
// import {MatAutocompleteModule} from '@angular/material';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { SearchService } from './search.service';
import { InMemoryDataService } from './in-memory-data-service.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
