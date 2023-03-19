import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule,HttpClientModule],
  declarations: [ AppComponent, HomeComponent, AdminComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
