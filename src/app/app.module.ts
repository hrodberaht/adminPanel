import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
=======
import { InvoiceComponent } from './invoice/invoice.component';
>>>>>>> 67c0e5fd54a6975ba3299448598c2f6a1addff32


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AddProductComponent,
    ProductListComponent,
    HeaderComponent
=======
    InvoiceComponent
>>>>>>> 67c0e5fd54a6975ba3299448598c2f6a1addff32
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
