import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

const routes: Routes = [
  {path:'topnav',component:TopNavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
