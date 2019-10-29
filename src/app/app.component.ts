import { Component } from '@angular/core';
import {RandomCard} from './random-card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Random Card Ng';
  public card: RandomCard;
  private nextCard: RandomCard;
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

