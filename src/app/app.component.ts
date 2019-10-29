import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Random Card Ng';
  public readonly card;
  private readonly nextCard: RandomCard;
  private nextImage: HTMLImageElement;
  constructor() {
    this.card = new RandomCard();
    this.nextCard = new RandomCard();
    this.nextImage = new Image();
    this.preload();
  }
  private preload() {
    this.nextImage.src = this.nextCard.imgSrc;
  }
  public next() {
    this.card.copy(this.nextCard);
    this.nextCard.reset();
    this.preload();
  }
}

class RandomCard {
  // these arrays are used to generate the random card names
  static SUITS = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
  static FACES = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven',
    'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];

  public cardName: string;
  public imgSrc: string;
  // generate a random card info
  constructor() {
    this.reset();
  }
  public reset() {
    // the random number  0..51
    const rand = Math.floor(52 * Math.random());
    // the card number 1..52 is matching the image file name
    const cardNumber = rand + 1;
    // the name of the card determined via the math trick
    this.cardName
      = RandomCard.FACES[rand % 13]
      + ' of '
      + RandomCard.SUITS[Math.floor(rand / 13)];
    // generate the image path
    this.imgSrc = `assets/images/cards/${cardNumber}.png`;
  }
  copy(card: RandomCard) {
    this.cardName = card.cardName;
    this.imgSrc = card.imgSrc;
  }
}

