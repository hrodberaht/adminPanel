import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[ProductsService]
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductsService) { 
    
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onProductAdded(product:Product) {
    this.products.push(product);

  }

  

}
