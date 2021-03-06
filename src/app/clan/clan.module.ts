import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClanComponent } from './clan.component';
import {CustomMaterialModule} from '../custom-material.module';

@NgModule({
  declarations: [ClanComponent],
  imports: [
    CommonModule,
    CustomMaterialModule,
  ]
})
export class ClanModule { }
