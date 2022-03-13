import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceModule } from './services/service.module';
import { GenericService } from './services/interface/generic.services';
import { ProductService } from './services/interface/product.services';
import { ConfigService } from './services/interface/services.test';
import { StockService } from './services/interface/stock.services';
import { MessageModule, MessageService, PanelModule } from 'primeng';
import { SaleService } from './services/interface/sale.services';
import { PurchaseService } from './services/interface/purchase.services';
import { CatalogService } from './services/interface/catalog.services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTES,
    ServiceModule,
    PanelModule,
    MessageModule
  ],
  providers: [GenericService, ConfigService, ProductService, StockService, PurchaseService, MessageService, SaleService, CatalogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
