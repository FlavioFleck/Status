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
      category: 'Cortes',
      services: [
        { name: 'Corte Masculino', price: 'R$ 80,00' },
        { name: 'Corte Feminino', price: 'R$ 80,00' }
      ]
    },
    {
      category: 'Escovas',
      services: [
        { name: 'Escova Simples', price: 'R$ 40,00' },
        { name: 'Escova Modelada', price: 'R$ 60,00' }
      ]
    },
    {
      category: 'Química / Coloração',
      services: [
        { name: 'Aplicação de Tinta', price: 'R$ 70,00' },
        { name: 'Tintura', price: 'R$ 100,00' },
        { name: 'Progressiva', price: 'R$ 150,00' },
        { name: 'Luzes', price: 'R$ 250,00' }
      ]
    },
    {
      category: 'Depilação',
      services: [
        { name: 'Buço', price: 'R$ 25,00' },
        { name: 'Axila', price: 'R$ 40,00' },
        { name: '1/2 Perna', price: 'R$ 50,00' },
        { name: 'Perna Inteira', price: 'R$ 70,00' },
        { name: 'Virilha Cavada', price: 'R$ 50,00' },
        { name: 'Virilha Completa', price: 'R$ 60,00' }
      ]
    },
  ];
}