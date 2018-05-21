import { Product } from "../models/product.model";
import { EventEmitter } from "@angular/core";

export class ProductsListService {
  productsChanged = new EventEmitter<Product[]>();
  private products: Product[] = [new Product("jasiek","22.30","https://www.smyk.com/matex-poszewka-na-poduszke-typu-jasiek-frotte-zolta-40x40-cm.html"),
                           new Product("jasiek","22.30","https://www.smyk.com/matex-poszewka-na-poduszke-typu-jasiek-frotte-zolta-40x40-cm.html")
  ];

  getProducts() {
      return this.products.slice();//add method slice to work with copy of products
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productsChanged.emit(this.products.slice());// return copy of products
    alert("Dodano produckt: " + product.name)
  }
    
}