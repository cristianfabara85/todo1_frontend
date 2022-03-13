import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng';
import { CatalogService } from 'src/app/services/interface/catalog.services';
import { SaleService } from 'src/app/services/interface/sale.services';
import { StockService } from '../../services/interface/stock.services';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styles: []
})
export class SalesComponent implements OnInit {

  constructor(private saleService: SaleService, private messageService: MessageService, private catalogService: CatalogService,
              private stockService: StockService
  ) {
  }

  displayDialog: boolean;

  sale: any = {};
  selectProduct: any = {};
  selectClient: any = {};
  newInventory: boolean;
  listSales: any[];
  cols: any[];
  listProducts: any[];
  listClients: any[];
  msgs: any[];
  isGlobal: boolean;
// tslint:disable-next-line:typedef
ngOnInit() {
  this.isGlobal = false;
  this.getCatalogoClients();
  this.getCatalogoProducts();
  this.displayDialog = false;
  this.cols = [
      { field: 'codigo', header: 'Código Producto' },
      { field: 'nombre', header: 'Nombre Producto' },
      { field: 'cliente', header: 'Cliente' },
      { field: 'cantidad', header: 'Cantidad' },
      { field: 'precioUnitario', header: 'Precio Unitario' },
      { field: 'precioTotal', header: 'Precio Total' }
  ];
  this.getSale();
}

  // tslint:disable-next-line:typedef
  showDialogToAdd() {
    this.newInventory = true;
    this.sale = {};
    this.displayDialog = true;
  }

  // tslint:disable-next-line:typedef
  save() {
    this.isGlobal = false;
    this.msgs = [];
    this.messageService.clear();
    this.sale.productoId = this.selectProduct.productoId;
    this.stockService.findAvailableStockByProductId(this.sale.productoId).subscribe(res => {
      if (res && res > 0) {
        if (res < this.sale.cantidad) {
          this.sale.productId = undefined;
          this.messageService.addAll([{ severity: 'info', summary: 'No se puede vender más cantidad que la disponible en stock ' }]);
        } else {
          this.isGlobal = true;
          this.sale.cliente = this.selectClient.nombre;
          this.sale.code = this.selectProduct.code;
          this.sale.cantidad = Number(this.sale.cantidad ? this.sale.cantidad : 0);
          this.sale.precioUnitario = Number(this.sale.precioUnitario ? this.sale.precioUnitario : 0);
          this.sale.codigo = this.selectProduct.codigo;
          this.sale.precioTotal = Number((this.sale.cantidad * this.sale.precioUnitario).toFixed(2));

          this.saleService.saveSale(this.sale).subscribe(response => {

            this.messageService.addAll([{ severity: 'success', summary: 'Venta realizada correctamente' }]);
            this.getSale();
            this.sale = null;
            this.displayDialog = false;
          });
        }
      } else {
        this.sale.productId = undefined;
        this.messageService.addAll([{ severity: 'info', summary: 'No existe stock para el producto seleccionado' }]);
      }
    });

  }

  // tslint:disable-next-line:typedef
  onRowSelect(event) {
    // this.getCatalogoInventorys();
    this.newInventory = false;
    this.sale = this.cloneCar(event);
    this.displayDialog = true;
  }

  cloneCar(c: any): any {
    const user = {};
    // tslint:disable-next-line:forin
    for (const prop in c) {
        user[prop] = c[prop];
    }
    return user;
  }

  // tslint:disable-next-line:typedef
  getSale() {
    this.saleService.findAllSales().subscribe(response => {
        this.listSales = response;
        this.listSales?.forEach(element => {
          element.nombre = this.listProducts.filter(x => x.value.productoId === element.productoId)[0].value.nombre;
          element.codigo = this.listProducts.filter(x => x.value.productoId === element.productoId)[0].value.codigo;
        });
      });
  }

  // tslint:disable-next-line:typedef
  getCatalogoClients() {
    this.listClients = [];
    this.catalogService.findCatalogByType(2).subscribe(response => {
      response.forEach(element => {
        this.listClients.push({ label: element.nombre + ' - ' + element.catalogoId, value: element });
      });
    });
  }

  getCatalogoProducts() {
    this.listProducts =[];
    this.catalogService.findAllCatalogProducts().subscribe(response => {
        response.forEach(element => {
          this.listProducts.push({label: element.nombre + ' - '+ element.productoId, value: element});
        });
    });
  }

}


