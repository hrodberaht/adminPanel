import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  products: Product[] = [new Product("","","")];

  addProduct(){
    this.products.push(new Product("","",""));
  }

  remove(){
    this.products.pop();
  }

  onShowProducts() {
    console.log(this.products);
  }
}
