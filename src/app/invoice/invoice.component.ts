import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tab = [1,2];

  addProduct(){
    this.tab.push(3);
  }

  remove(){
    this.tab.pop();
  }
}
