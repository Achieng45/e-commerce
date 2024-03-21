import { Component } from '@angular/core';

@Component({
  selector: 'app-flash-sale',
  templateUrl: './flash-sale.component.html',
  styleUrls: ['./flash-sale.component.css']
})
export class FlashSaleComponent {
  products: any[] = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 800, productImage: 'assets/flash-sale-imgs/game-pad.png' },
    { id: 2, name: 'Product 3', description: 'Description 3', price: 800, productImage: 'assets/flash-sale-imgs/white-monitor.png' },
    { id: 3, name: 'Product 4', description: 'Description 4', price: 800, productImage: 'assets/flash-sale-imgs/keyboard.png' },
    { id: 4, name: 'Product 5', description: 'Description 5', price: 800, productImage: 'assets/flash-sale-imgs/chair.png' },
    { id: 5, name: 'Product 6', description: 'Description 6', price: 800, productImage: 'assets/flash-sale-imgs/monitor.jpeg' },
    { id: 6, name: 'Product 7', description: 'Description 7', price: 800, productImage: 'assets/flash-sale-imgs/monitor.jpeg' },
    { id: 7, name: 'Product 8', description: 'Description 8', price: 800, productImage: 'assets/flash-sale-imgs/monitor.jpeg' },
    { id: 8, name: 'Product 9', description: 'Description 9', price: 800, productImage: 'assets/flash-sale-imgs/monitor.jpeg' }
  ]
  }
