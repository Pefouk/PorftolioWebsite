import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : '', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FontAwesomeModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
