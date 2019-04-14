import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from '../../custom-material.module';
import {ArtefactsComponent} from './artefacts.component';

@NgModule({
  declarations: [ArtefactsComponent],
  exports: [
    ArtefactsComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule
  ]
})
export class ArtefactsModule { }
