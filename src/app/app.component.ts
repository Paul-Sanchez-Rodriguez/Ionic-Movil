import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    //{ title: 'customers', url: '/customers', icon: 'people' },
    { title: 'home', url: '/productos', icon: 'people' },
    { title: 'Login', url: '/login', icon: 'people' },
    { title: 'Carrito', url: '/carrito', icon: 'people' },
  ];
  
  constructor() {}
}
