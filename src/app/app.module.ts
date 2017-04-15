import { BrowserModule } from '@angular/platform-browser';
import {Injectable, ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { FormsModule } from '@angular/forms';
import {BaseRequestOptions, CookieXSRFStrategy, HttpModule, XSRFStrategy, Headers, RequestOptions} from '@angular/http';

import { AppComponent } from './app.component';
import { PartyListComponent } from './party-list/party-list.component';
import { PartyItemComponent } from './party-item/party-item.component';
import { AsyncService } from './shared/models/async.service';
import { PartyDetailComponent } from './party-detail/party-detail.component';
import { LoginComponent } from './login/login.component';
import { FriendsComponent } from './friends/friends.component';
import {CommonModule} from '@angular/common';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {
  headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });
}


@NgModule({
  declarations: [
    AppComponent,
    PartyListComponent,
    PartyItemComponent,
    PartyDetailComponent,
    LoginComponent,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
  ],
  providers: [
    AsyncService,
    {
      provide: XSRFStrategy,
      useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
