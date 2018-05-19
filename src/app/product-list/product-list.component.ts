import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductsListService } from '../services/products-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  products: Product[];

  constructor(private prodService: ProductsListService) { 
    
  }

  ngOnInit() {
    this.products = this.prodService.getProducts();
    this.prodService.productsChanged.subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    )
  }

}
