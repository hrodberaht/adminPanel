import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [new Product("jasiek","22.30","https://www.smyk.com/matex-poszewka-na-poduszke-typu-jasiek-frotte-zolta-40x40-cm.html")];

  constructor() { 
    setTimeout(() => console.log(this.products),2000);
    
  }

  ngOnInit() {
  }

  

}
