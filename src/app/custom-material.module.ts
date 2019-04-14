import { NgModule } from '@angular/core';
import {MatButtonModule, MatGridListModule, MatIconModule, MatMenuModule, MatTabsModule, MatToolbarModule} from '@angular/material';


@NgModule({
  declarations: [
  ],
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule
  ],
  providers: [],
})
export class CustomMaterialModule { }
