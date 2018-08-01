import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormArray } from "@angular/forms";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.css"]
})
export class InvoiceComponent implements OnInit {
  invoice: FormGroup;

  constructor(private fb: FormBuilder) {
    this.invoice = fb.group({
      invoiceNumber: "",
      date: "",
      supplier: "",
      products: this.fb.array([])
    });

    this.send();
  }

  ngOnInit() {}

  get productsForms() {
    return this.invoice.get("products") as FormArray;
  }

  addProduct() {
    const product = this.fb.group({
      productName: [],
      ean: [],
      stock: []
    });

    this.productsForms.push(product);
  }

  deleteProduct(i) {
    this.productsForms.removeAt(i);
  }

  send() {
    console.log(this.invoice.value.products);
  }
}
