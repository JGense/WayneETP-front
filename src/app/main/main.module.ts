import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import {CustomMaterialModule} from '../custom-material.module';
import {SharedModule} from '../utilities/shared.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    SharedModule
  ]
})
export class MainModule { }
