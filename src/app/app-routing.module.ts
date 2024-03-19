import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesTrendingComponent } from './categories-trending/categories-trending.component';

const routes: Routes = [
  {path:'trending',component:CategoriesTrendingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
