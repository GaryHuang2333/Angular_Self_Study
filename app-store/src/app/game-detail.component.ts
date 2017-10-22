import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  // styleUrls: ['./game-detail.component.css']
})

export class GameDetailComponent {
  @Input() currentGame: Game;
  @Input() currentNumber: Number;
  @Output() myRequest = new EventEmitter<Game>();
  @Output() myRequest2 = new EventEmitter<Number>();

  game = new Game('Changed Game', 'Changed Type', 5);
  emitNumber = 5;
  delete() {
    this.myRequest.emit(this.currentGame);
  }

  changeGame() {
    this.game = this.currentGame;
  }

  emit1() {
    this.myRequest.emit(this.currentGame);
  }

  emit2() {
    this.myRequest2.emit(this.emitNumber);
  }

  changeCurrentGame() {
    this.currentGame = this.game;
    this.myRequest.emit(this.currentGame);
  }

  changeCurrentNumber() {
    this.currentNumber = this.emitNumber;
    this.myRequest2.emit(this.currentNumber);
  }

}
