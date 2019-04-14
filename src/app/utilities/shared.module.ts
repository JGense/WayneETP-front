import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {BuildsComponent} from '../outils/builds/builds.component';
import {ArtefactsComponent} from '../outils/artefacts/artefacts.component';

@NgModule({
  imports: [ CommonModule],
  exports : [
    CommonModule,
    FormsModule,
    BuildsComponent,
    ArtefactsComponent
  ],
  declarations: [ BuildsComponent, ArtefactsComponent ],
})
export class SharedModule { }
