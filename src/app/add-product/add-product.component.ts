import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  name = '';
  price;
  answer = false;
  constructor() {
    setTimeout(() => this.name = "edek", 2000)
  }

  ngOnInit() {
  }

  checkAnswer(event) {
    if(event.target.value === "")
    {
      this.answer = false;
      return;
    }

    if(event.target.value == 2)
    this.answer = true;
  }

  getColor() {
    return this.price == 2 ? "green" : "red";
  }

}
