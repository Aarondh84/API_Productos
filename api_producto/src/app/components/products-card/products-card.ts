import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../services/product';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-products-card',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './products-card.html',
  styleUrl: './products-card.css',
})
export class ProductsCard {
  @Input() producto!: Product;

  @Output() eliminar = new EventEmitter<string>();

  onEliminar() {
    this.eliminar.emit(this.producto._id);
  }
}
