import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent {
  
  selectedProduct: any = null;

  // lista de produtos
  products = [
    {
      category: 'Tratamento',
      name: 'Shampoo Wella Professionals Fusion 1L',
      description: 'Reparação intensa e maciez. Limpa delicadamente enquanto reconstrói a fibra capilar danificada.',
      usage: 'Aplique nos cabelos molhados, massageie suavemente até formar espuma. Enxágue bem e repita se necessário.',
      image: 'assets/images/product1.png'
    },
    {
      category: 'Tratamento',
      name: 'Condicionador Wella Professionals Fusion 1L',
      description: 'Condicionador profissional que repara intensamente cabelos danificados com tecnologia Silksteel. Fortalece os fios, reduz a quebra e devolve brilho e maciez desde as primeiras aplicações. Fórmula pH balanceado em embalagem de 1000ml para uso prolongado em casa ou salão.',
      usage: 'Aplique no comprimento e pontas do cabelo úmido, deixe agir por 30 segundos e enxágue completamente.',
      image: 'assets/images/product2.png'
    },
    {
      category: 'Tratamento',
      name: 'Shampoo Sebastian Professional Dark Oil 1L',
      description: 'Shampoo Sebastian Dark Oil limpa suavemente enquanto nutre profundamente com blend de óleos de argan e jojoba. Proporciona hidratação intensa, maciez e brilho natural sem pesar, controla o frizz e deixa os fios disciplinados. Embalagem de 1000ml com rendimento ideal para uso diário.',
      usage: 'Aplique nos cabelos molhados, massageie até formar espuma e enxágue. Repita se necessário.',
      image: 'assets/images/product3.png'
    },
    {
      category: 'Tratamento',
      name: 'Máscara Capilar L\'Oréal Professionnel Serie Expert Absolut Repair 500g',
      description: 'Tratamento profissional para cabelos danificados que reconstrói a fibra capilar e devolve maciez e brilho. Fórmula com Quinoa Dourada e Proteína do Trigo promove reparação intensa, hidratação profunda e redução da quebra em fios sensibilizados.',
      usage: 'Aplique sobre cabelo lavado e úmido, distribua uniformemente, deixe agir de 3 a 5 minutos e enxágue completamente.',
      image: 'assets/images/product4.png'
    },
    {
      category: 'Tratamento',
      name: 'Spray Truss Uso Obrigatório 260ml',
      description: 'Spray reconstrutor e hidratante Truss de 260ml que fortalece, controla o frizz e devolve brilho imediato aos fios. Fórmula com aminoácidos e nano reconstrução para proteção diária; uso como leave-in ou máscara líquida para resultados visíveis desde a primeira aplicação.',
      usage: 'Borrife de 2 a 3 vezes no comprimento e pontas dos cabelos úmidos, mecha a mecha; massageie e deixe agir sem enxaguar. Pode ser usado diariamente.',
      image: 'assets/images/product5.png'
    },
    {
      category: 'Tratamento',
      name: 'Creme Finalizador Jacques Janine CC 15 em 1 Cream Capilar 200ml',
      description: 'Creme finalizador 15 em 1 Jacques Janine que hidrata, repara pontas duplas, controla o frizz e protege contra danos solares. Fórmula com óleo de girassol e manteiga de karité para fios macios, brilhantes e disciplinados, ideal para uso diário em todos os tipos de cabelo.',
      usage: 'Aplique no cabelo limpo e úmido, distribua do comprimento às pontas e modele ao natural ou com secador.',
      image: 'assets/images/product6.png'
    },
    {
      category: 'Tratamento',
      name: 'Máscara Capilar Wella Professionals Invigo Nutri-Enrich 500ml',
      description: 'Nutrição profunda para cabelos secos. Com Goji Berry, recupera a vitalidade, garante maciez e protege contra danos externos.',
      usage: 'Aplique nos cabelos limpos e úmidos, deixe agir por 5 a 10 minutos e enxágue completamente.',
      image: 'assets/images/product7.png'
    },
    {
      category: 'Tratamento',
      name: 'Óleo Capilar L\'Oréal Professionnel Serie Expert Absolut Repair Quinoa 90ml',
      description: 'Tratamento intensivo para cabelos muito danificados e secos, que regenera profundamente a fibra capilar, nutre e reconstrói sem pesar. Protege contra o calor e controla o frizz, deixando os fios macios e com brilho intenso.',
      usage: 'Aplique algumas gotas nos cabelos limpos ou secos, distribuindo uniformemente do comprimento às pontas.',
      image: 'assets/images/product8.png'
    },
    {
      category: 'Tratamento',
      name: 'Coloração Color Perfect Pure Naturals 5/0 Castanho Claro 60g',
      description: 'Coloração permanente Wella Professionals que oferece cobertura total dos fios brancos com acabamento natural e brilhante. Fórmula enriquecida com agentes condicionantes que protegem e hidratam durante a coloração, proporcionando cor intensa e duradoura com aspecto sedoso.',
      usage: 'Misture o creme com o revelador, aplique em cabelos secos e limpos, respeite o tempo de ação recomendado e enxágue bem até remover todo o produto.',
      image: 'assets/images/product9.png'
    },
    {
      category: 'Tratamento',
      name: 'Descolorante Wella Professionals Blondor Multi Blonde Powder 400g',
      description: 'Pó descolorante de alta performance: clareia até 7 tons e neutraliza reflexos indesejados. Textura ideal para mechas e balayage com precisão e segurança.',
      usage: 'Misture o pó com o revelador na proporção indicada até formar pasta homogênea, aplique nas áreas desejadas, acompanhe o tempo de ação e enxágue. Finalize com condicionador.',
      image: 'assets/images/product10.png'
    }
  ];

  // funções do modal
  openModal(product: any) {
    this.selectedProduct = product;
    document.body.style.overflow = 'hidden'; // trava a rolagem da pagina
  }

  closeModal() {
    this.selectedProduct = null;
    document.body.style.overflow = 'auto'; // destrava a rolagem
  }
}
