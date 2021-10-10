import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PurchaseTokensComponent } from './purchase-tokens/purchase-tokens.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    PurchaseTokensComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
