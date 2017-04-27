import {Component, Input, OnInit} from '@angular/core';
import {ILogin} from '../shared/models/imodels';
import {AsyncService} from '../shared/models/async.service';
import {Router} from '@angular/router';
import {IsLoginService} from '../shared/models/is-login.service';
// import { AppModule } from '../app.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() login: ILogin = {
    username: '',
    password: '',
    csrfmiddlewaretoken: ''
  };
  // @Input() isLogin;

  constructor(
    private _AsyncService: AsyncService,
    private _isLoginService: IsLoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this._isLoginService.updateStatus(false);
    this._AsyncService.getLogin()
      .subscribe((csrf) => {
        this.login.csrfmiddlewaretoken = csrf;
      }
    );
  }

  OnSubmit(value) {
    this.login.username = value.username;
    this.login.password = value.password;
    this._AsyncService.postLogin(JSON.stringify(this.login))
      .subscribe(() => {
        this._isLoginService.updateStatus(true);
        this.router.navigate(['/parties']);
      });
  }

}
