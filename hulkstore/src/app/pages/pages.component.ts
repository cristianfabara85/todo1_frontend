import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Productos', icon: 'pi pi-shopping-cart', routerLink: ['/product'] },
      { label: 'Compras', icon: 'pi pi-file', routerLink: ['/purchases'] },
      { label: 'Ventas', icon: 'pi pi-file', routerLink: ['/sales'] },
      { label: 'Stock', icon: 'pi pi-pencil', routerLink: ['/stock'] }
    ];
  }

}
