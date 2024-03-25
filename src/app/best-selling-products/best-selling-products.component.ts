import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-best-selling-products',
  templateUrl: './best-selling-products.component.html',
  styleUrls: ['./best-selling-products.component.css']
})
export class BestSellingProductsComponent {

 products: any[] = [
  { id: 1, name: 'Product 1', price: 800, productImage: 'assets/best-selling-imgs/bookcase.png' },
  { id: 2, name: 'Product 2', price: 800, productImage: 'assets/best-selling-imgs/computer-housing.png' },
  { id: 3, name: 'Product 3', price: 800, productImage: 'assets/best-selling-imgs/duffle-bag.png' },
  { id: 4, name: 'Product 4', price: 800, productImage: 'assets/best-selling-imgs/jacket.png' },
  { id: 5, name: 'Product 5', price: 800, productImage: 'assets/best-selling-imgs/jacket.png' },
  { id: 6, name: 'Product 6', price: 800, productImage: 'assets/best-selling-imgs/jacket.png' }
]

customOptions: OwlOptions = {
  loop: false,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
  // responsive: {
  //   0: {
  //     items: 1
  //   },
  //   400: {
  //     items: 2
  //   },
  //   740: {
  //     items: 3
  //   },
  //   940: {
  //     items: 4
  //   }
  // },
  nav: false
}

}
