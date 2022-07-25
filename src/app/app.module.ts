import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Colorfull1Component } from './colorfull1/colorfull1.component';
import { StatusTypeComponent } from './status-type/status-type.component';
import { AlertdialogService } from './alertdialog.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  providers:  [AlertdialogService],
  declarations: [ AppComponent, HelloComponent, Colorfull1Component, StatusTypeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
