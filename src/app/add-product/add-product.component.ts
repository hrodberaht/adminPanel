import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() onAddProduct = new EventEmitter<Product>();
  show:boolean = false;
  product:Product;
  
  constructor() {
    this.product = new Product("koala","30","img");
  }

  ngOnInit() {
  }

  onShowAddProduct() {
    this.show = !this.show; //toggle
  }

  onSubmit() {
    this.onAddProduct.emit(this.product);
    this.addToDatabase();
    this.product = new Product("","","");
  }

  addToDatabase() {
    console.log(this.product);
  }

}
