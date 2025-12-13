import { Component } from '@angular/core';
import { Product, ProductService } from '../../services/product';
import { ProductsCard } from '../products-card/products-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductsCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {

  productos: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.cargarProductos().subscribe
      (datos => {
        this.productos = datos;
        console.log('Productos cargados de la API: ',datos)
      })
  }

  onEliminar(id: string) {
  console.log('Producto a eliminar:', id);
  // Aquí luego llamaremos al servicio
}
}
