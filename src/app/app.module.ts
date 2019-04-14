import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom-material.module';
import {MainModule} from './main/main.module';
import {ClanModule} from './clan/clan.module';
import {OutilsModule} from './outils/outils.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    MainModule,
    ClanModule,
    OutilsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
