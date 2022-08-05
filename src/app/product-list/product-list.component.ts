import { Component, OnInit } from '@angular/core';
// import productData from '../db.json';

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   brand: string;
//   category: string;
//   thumbnail: any;
//   images: any;
// }

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor() {}
  // product: Product[] = productData;
  ngOnInit() {}
}
