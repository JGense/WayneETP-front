import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {CustomMaterialModule} from '../custom-material.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ]
})
export class MainModule { }
