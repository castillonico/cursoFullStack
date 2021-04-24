import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjNgIfComponent } from './ej-ng-if/ej-ng-if.component';
import { UnContadorComponent } from './un-contador/un-contador.component';
import { ContadorComponent } from './un-contador/contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    EjNgIfComponent,
    UnContadorComponent,
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
