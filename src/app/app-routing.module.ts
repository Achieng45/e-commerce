import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const routes: Routes = [
  {path:'topnav',component:TopNavbarComponent},
  {path:'sidenav',component:SideNavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
