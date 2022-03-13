import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserModel } from '../services/models/user.model';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  items: MenuItem[];

  constructor(public userModel: UserModel) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
     this.items = [
      { label: 'Usuarios', icon: 'pi pi-users', routerLink: ['/users'] },
      { label: 'Productos', icon: 'pi pi-pencil', routerLink: ['/product'] },
      { label: 'Adquisiciones', icon: 'pi pi-pencil', routerLink: ['/purchases'] },
      { label: 'Ventas', icon: 'pi pi-pencil', routerLink: ['/sales'] },
      { label: 'Ver stock', icon: 'pi pi-eye', routerLink: ['/stock'] },
      { label: 'Cerrar sesión', icon: 'pi pi-sign-out', routerLink: ['/login'] }
    ];
  }

}
