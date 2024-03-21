import { Component } from '@angular/core';

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
}
