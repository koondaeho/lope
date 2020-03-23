import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakeComponent } from './cake/cake.component';
import { PicnicComponent } from './picnic/picnic.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeComponent,
    PicnicComponent,
    MapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
