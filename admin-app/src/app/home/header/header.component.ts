import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username = '';
  login_date = '';

  constructor(private loginservice: LoginService) { }

  ngOnInit() {
    // 通过服务获取系统的Date(Nov. 2012)
    this.login_date = this.loginservice.getSysDate().getMonth() + ' ' + this.loginservice.getSysDate().getFullYear();

    // 获取当前登陆的用户名
    this.username = this.loginservice.getUsername();
    console.log('Gary_test-[header] login_date:' + this.login_date + ' username:' + this.username);

  }

}
