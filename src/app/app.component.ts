import {Component, Input} from '@angular/core';
import {IsLoginService} from './shared/models/is-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() isLogin$ = true;

  constructor(
    private _isLoginService: IsLoginService
  ) {
    _isLoginService.getStatus().subscribe((data) => this.isLogin$ = data);
  }
  // title = 'app works!!!';
  // isLogin: boolean = false;
}
