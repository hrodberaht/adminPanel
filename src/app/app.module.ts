import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from './header/header.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { ProductComponent } from './product/product.component';
import { ProductsListService } from './services/products-list.service';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'productList', component: ProductListComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'invoice', component: InvoiceComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    ProductListComponent,
    HeaderComponent,
    InvoiceComponent,
    ProductComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductsListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
