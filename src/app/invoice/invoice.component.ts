import { Component, OnInit } from "@angular/core";
import { Product } from "../models/product.model";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"]
})
export class InvoiceComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  products: Array<string> = [""];

  onEnter(product, index) {
    this.products[index] = product;
  }

  onAdd() {
    this.products.push("");
    console.log(this.products);
  }

  onRemove(index) {
    this.products.splice(index, 1);
    console.log(index);
  }
}
