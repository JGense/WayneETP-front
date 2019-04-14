import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CustomMaterialModule} from '../../custom-material.module';
import {BuildsComponent} from './builds.component';

@NgModule({
  declarations: [BuildsComponent],
  exports: [
    BuildsComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule
  ]
})
export class BuildsModule { }
