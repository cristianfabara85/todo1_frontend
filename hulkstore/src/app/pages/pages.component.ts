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
      { label: 'Usuarios', icon: 'pi pi-pencil', routerLink: ['/users'] },
      { label: 'Productos', icon: 'pi pi-pencil', routerLink: ['/product'] },
      { label: 'Adquisiciones', icon: 'pi pi-pencil', routerLink: ['/purchases'] },
      { label: 'Ventas', icon: 'pi pi-shopping-cart', routerLink: ['/sales'] },
      { label: 'Ver stock', icon: 'pi pi-eye', routerLink: ['/stock'] }
    ];
  }

}
