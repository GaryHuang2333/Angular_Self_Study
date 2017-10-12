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
    new Game('元气骑士', 'game', 3),
  ];
  evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';

  favApp = '网易云音乐';
  favGame = '王者荣耀';
  favType = 'Game';
  favRating = 5;
  favSex = 'Male';
  baiduUrl = 'www.baidu.com';
  favColor = 'black';
  i = 0;
  imgs = [
    'https://angular.io/generated/images/guide/architecture/overview2.png',
    'https://www.baidu.com/img/bd_logo1.png',
    'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=b720ea3353ee3d6d22c680cd7b2d0a1f/d0c8a786c9177f3e811405997acf3bc79f3d5606.jpg',
    'https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=9624e60f751ed21b79c929e39555baf9/14ce36d3d539b6002b43784ae150352ac75cb7b9.jpg',
    'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=d1e9fd80ca11728b302d8b24f0c7a4f3/eaf81a4c510fd9f9d7c32778222dd42a2934a4ce.jpg'
  ]
  favImg = this.imgs[0];
  getFavRating(): number {
    return 5;
  }
  changeFavImg() {
    this.i = Math.floor(Math.random() * 5);
    this.favImg = this.imgs[this.i];
  }

  changeFavApp() {
    this.favApp = 'Fave App' + Math.floor(Math.random() * 5);
  }

  
}
