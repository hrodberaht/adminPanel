import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product.model';
import { ProductsListService } from '../services/products-list.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  show:boolean = false;
  product:Product;
  
  constructor(private prodService: ProductsListService) {
    
  }

  ngOnInit() {
    this.product = new Product("koala","30","img");
  }

  onShowAddProduct() {
    this.show = !this.show; //toggle
  }

  onSubmit() {
    this.prodService.addProduct(this.product);
  }

  addToDatabase() {
    console.log(this.product);
  }

}
