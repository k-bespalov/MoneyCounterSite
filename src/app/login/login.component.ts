import {Component, Input, OnInit} from '@angular/core';
import {ILogin} from '../shared/models/iparty';
import {AsyncService} from '../shared/models/async.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() login: ILogin = {
    username: '',
    password: '',
  };

  constructor(private _AsyncService: AsyncService) { }

  ngOnInit() {
  }

  OnSubmit(value) {
    console.log(value.value);
    this._AsyncService.postLogin(JSON.stringify(value.value)).
    subscribe();
  }

}
