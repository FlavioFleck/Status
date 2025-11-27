import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-price-list',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './price-list.html', 
  styleUrl: './price-list.css'
})
export class PriceListComponent {

  priceList = [
    {
      category: 'Cabelos',
      services: [
        { name: 'Corte Feminino', price: 'R$ 80,00' },
        { name: 'Escova', price: 'R$ 40,00' },
        { name: 'Escova Modelada', price: 'R$ 60,00' },
        { name: 'Hidratação', price: 'R$ 80,00' }
      ]
    },
  ];

}