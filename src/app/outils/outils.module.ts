import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutilsComponent } from './outils.component';
import {CustomMaterialModule} from '../custom-material.module';
import {SharedModule} from '../utilities/shared.module';

@NgModule({
  declarations: [OutilsComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
    SharedModule
  ]
})
export class OutilsModule { }
