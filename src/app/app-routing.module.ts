import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {ClanComponent} from './clan/clan.component';
import {OutilsComponent} from './outils/outils.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: MainComponent},
  { path: 'clan', component: ClanComponent},
  { path: 'outils', component: OutilsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
