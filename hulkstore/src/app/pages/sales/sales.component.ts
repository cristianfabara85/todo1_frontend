import { Component, OnInit } from '@angular/core';
import { CatalogService } from 'src/app/services/interface/catalog.services';
import { ProductService } from 'src/app/services/interface/product.services';
import { SaleService } from 'src/app/services/interface/sale.services';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styles: []
})
export class SalesComponent implements OnInit {

  constructor(private saleService: SaleService, private productService: ProductService, private catalogService: CatalogService) {
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
// tslint:disable-next-line:typedef
ngOnInit() {

  this.getCatalogoClients();
  this.getCatalogoProducts();
  this.displayDialog = false;
  this.cols = [
      { field: 'productoId', header: 'Código Producto' },
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
    this.sale.productoId = this.selectProduct.productoId;
    this.sale.cliente = this.selectClient.nombre;
    this.sale.code = this.selectProduct.code;
    this.sale.cantidad = Number(this.sale.cantidad ? this.sale.cantidad : 0);
    this.sale.precioUnitario = Number(this.sale.precioUnitario ? this.sale.precioUnitario : 0);
    this.sale.codigo = this.selectProduct.codigo;
    this.sale.precioTotal = Number((this.sale.cantidad * this.sale.precioUnitario).toFixed(2));

    this.saleService.saveSale(this.sale).subscribe(response => {
      this.getSale();
      this.sale = null;
      this.displayDialog = false;
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


