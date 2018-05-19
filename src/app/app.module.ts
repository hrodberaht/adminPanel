import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductComponent } from './product/product.component';
import { ProductsListService } from './services/products-list.service';


@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductListComponent,
    HeaderComponent,
    InvoiceComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
