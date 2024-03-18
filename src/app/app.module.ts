import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { CategoriesComponent } from './categories/categories.component';
import { FeaturedComponent } from './featured/featured.component';
import { FlashSaleComponent } from './flash-sale/flash-sale.component';
import { BestSellingProductsComponent } from './best-selling-products/best-selling-products.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { CategoriesTrendingComponent } from './categories-trending/categories-trending.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ServicesComponent,
    TopNavbarComponent,
    SideNavComponent,
    CategoriesComponent,
    FeaturedComponent,
    FlashSaleComponent,
    BestSellingProductsComponent,
    OurProductsComponent,
    CategoriesTrendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
