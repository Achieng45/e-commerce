import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  icons: { myicon: string; title: string }[] = [
    { myicon: 'camera.svg', title: 'Cameras' },
    { myicon: 'laptop.svg', title: 'Computer' },
    { myicon: 'controller.svg', title: 'Gaming' },
    { myicon: 'headphones.svg', title: 'Headphones' },
    { myicon: 'phone.svg', title: 'Phones' },
    { myicon: 'watch.svg', title: 'Watches' },
  ];
}
