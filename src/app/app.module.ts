import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutNiMeiComponent } from './about-ni-mei/about-ni-mei.component';
import { NihaoComponent } from './nihao/nihao.component';
import { ErdayeComponent } from './erdaye/erdaye.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutNiMeiComponent,
    NihaoComponent,
    ErdayeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
