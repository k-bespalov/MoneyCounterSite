import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PartyListComponent } from './party-list/party-list.component';
import { PartyItemComponent } from './party-item/party-item.component';
import {AsyncService} from './shared/models/async.service';
import { PartyDetailComponent } from './party-detail/party-detail.component';
import { LoginComponent } from './login/login.component';
import { FriendsComponent } from './friends/friends.component';

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
    HttpModule
  ],
  providers: [
    AsyncService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
