import { Component, signal } from '@angular/core';
import { Product, ProductService } from './services/product';
import { ProductsList } from './components/products-list/products-list';
import { ProductsFormComponent } from './components/products-form/products-form';

@Component({
  selector: 'app-root',
  imports: [ ProductsList, ProductsFormComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('api_producto');

  constructor(private productService: ProductService) {
    this.productService.cargarProductos().subscribe(
      (datos :Product[]) => {
        console.log('Productos cargados de la API: ',datos)
      })
  }

  onProductoCreado(producto: any) {
    console.log('Producto recibido:', producto);
  }
}