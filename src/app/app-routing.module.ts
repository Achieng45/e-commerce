import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesTrendingComponent } from './categories-trending/categories-trending.component';
import { OurServicesComponent } from './our-services/our-services.component';

const routes: Routes = [
  {path:'trending',component:CategoriesTrendingComponent},
  {path:'services',component:OurServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
