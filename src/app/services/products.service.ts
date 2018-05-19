import { Product } from "../models/product.model";

export class ProductsService {
  private products: Product[] = [new Product("jasiek","22.30","https://www.smyk.com/matex-poszewka-na-poduszke-typu-jasiek-frotte-zolta-40x40-cm.html"),
                           new Product("jasiek","22.30","https://www.smyk.com/matex-poszewka-na-poduszke-typu-jasiek-frotte-zolta-40x40-cm.html")
  ];

  getProducts() {
      return this.products;
  }
    
}