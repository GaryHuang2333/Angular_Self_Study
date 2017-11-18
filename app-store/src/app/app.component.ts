import { Component } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  games = [
    new Game('王者荣耀', 'game', 5),
    new Game('Candy Crush', 'game', 2),
    new Game('阴阳师', 'game', 3),
    new Game('元气骑士', 'game', 1),
    new Game('天天消除', 'game', 3),
    new Game('流言侦探', 'game', 4),
  ];
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
  currentApp = this.games[0];
  currentGame = new Game('王者荣耀', 'game', 5);
  emitGame = new Game('emitGame', 'game', 4);
  emitNumber = 10;
  currentNumber = 20;
  inputfavAppName = 'Please Input your Fav App';
  favAppName = '网易云音乐';
  favGameName = '王者荣耀';
  favType = 'Game';
  favRating = 5;
  favSex = 'Male';
  baiduUrl = 'www.baidu.com';
  favColor = 'black';
  i = 0;
  imgUrl1 = '../assets/overview2.png';
  imgUrl2 = '../assets/bd_logo1.png';
  imgUrl3 = '../assets/bilibili.png';
  imgUrl4 = '../assets/bojack.jpeg';
  imgUrl5 = '../assets/westernworld.jpeg';
  imgs = [this.imgUrl1, this.imgUrl2, this.imgUrl3, this.imgUrl4, this.imgUrl5];
  favImg = this.imgs[0];
  ngIfInd = true;
  currentClasses: {};
  isFirst = true;
  isSpecial = true;
  currentStyles = {
    'font-style':  true    ? 'italic' : 'normal',
    'font-weight': true    ? 'bold'   : 'normal',
    'font-size':   true    ? '24px'   : '12px'
  };
  getFavRating(): number {
    return 5;
  }
  changeFavImg() {
    this.i = Math.floor(Math.random() * 5);
    this.favImg = this.imgs[this.i];
  }

  changeFavApp() {
    this.favAppName = 'Fave App' + Math.floor(Math.random() * 5);
  }

  changeCurrentApp() {
    this.currentApp.name = '元气骑士';
  }

  changeInputFavApp(value: string) {
    this.inputfavAppName = value;
  }

  changeCurrentGame() {
    this.currentGame.name = '元气骑士';
  }

  /**
   * test ngClass
   */

}
