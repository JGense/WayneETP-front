import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {BuildsComponent} from '../outils/builds/builds.component';
import {ArtefactsComponent} from '../outils/artefacts/artefacts.component';
import {MembresComponent} from '../clan/membres/membres.component';
import {ContactComponent} from '../clan/contact/contact.component';
import {GeneralComponent} from '../clan/general/general.component';

@NgModule({
  imports: [ CommonModule],
  exports : [
    CommonModule,
    FormsModule,
    BuildsComponent,
    ArtefactsComponent,
    MembresComponent,
    ContactComponent,
    GeneralComponent
  ],
  declarations: [ BuildsComponent, ArtefactsComponent, MembresComponent, ContactComponent, GeneralComponent ],
})
export class SharedModule { }
