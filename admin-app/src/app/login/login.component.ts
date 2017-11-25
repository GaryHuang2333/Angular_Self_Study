import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private formModel: FormGroup;
  private fb: FormBuilder = new FormBuilder();
  private userID: string;
  private userPwd: string;

  constructor(private loginService: LoginService, private router: Router) {
    this.formModel = this.fb.group({
      loginName: ['', Validators.required],
      loginPasswd: ['', [Validators.required]],
      remFlag: ['']
    });
  }

  ngOnInit() {}

  doSubmit() {
    if (this.formModel.valid) {
      this.userID = this.formModel.get('loginName').value;
      this.userPwd = this.formModel.get('loginPasswd').value;

      if (this.loginService.requestLogin(this.userID, this.userPwd)) {
        this.router.navigate(['/home']);
      }else {
        alert('登录失败');
      }
      // if(this.loginservice.requestLogin(this.userID, this.userPwd)){
      //   this.router.navigate(['/home']);
      // }
    }
  }
}
