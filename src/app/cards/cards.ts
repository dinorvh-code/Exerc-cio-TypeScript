import { Component } from '@angular/core';
import { App } from '../app';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class Cards {

tituloPrincipal = 'Why Choose Tourz';

diferenciais = [

{
icone:  'assets/icone01.png',
titulo: 'Ultimate flexibility',
descricao: 'You are in control, with free cancellation and payment options to satisfy any plan or budget'
},

{
icone: 'assets/icone02.png',
titulo: 'Memorable experiences',
descricao: 'Browse and book tours and activities so incredible, you will want to tell your friends'
},

{
icone: 'assets/icone03.png',
titulo: 'Quality at our core',
descricao: 'High-quality standards. Millions of reviews. A tourz company.'
},

{
icone: 'assets;icone04.png',
titulo: 'Award-winning support',
descricao: 'New price? New plan? No problem. We are here to help, 24/7.'
}.

]

}
