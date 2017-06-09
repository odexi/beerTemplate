import { BeerService } from './beer.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddbeersComponent } from './addbeers/addbeers.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbeersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
