import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { Colorfull1Component } from './colorfull1/colorfull1.component';
import { StatusTypeComponent } from './status-type/status-type.component';

import { AlertdialogService } from './alertdialog.service';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [AlertdialogService],
  declarations: [
    AppComponent,
    Colorfull1Component,
    StatusTypeComponent,
    routingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
