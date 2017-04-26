import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BaseRequestOptions, CookieXSRFStrategy, HttpModule, XSRFStrategy, Headers} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { PartyListComponent } from './party-list/party-list.component';
import { PartyItemComponent } from './party-item/party-item.component';
import { AsyncService } from './shared/models/async.service';
import { PartyDetailComponent } from './party-detail/party-detail.component';
import { LoginComponent } from './login/login.component';
import { FriendsComponent } from './friends/friends.component';
import {CommonModule} from '@angular/common';
import { PaymentsComponent } from './payments/payments.component';
import { RepaymentsComponent } from './repayments/repayments.component';
import { ProfileComponent } from './profile/profile.component';
import { PartyAddComponent } from './party-add/party-add.component';
import { PaymentAddComponent } from './payment-add/payment-add.component';
import { PageProfileComponent } from './page-profile/page-profile.component';

@Injectable()
export class DefaultRequestOptions extends BaseRequestOptions {
  headers: Headers = new Headers({
    'Content-Type': 'application/json'
  });
}

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'parties', component: PartyListComponent },
  { path: 'party/add', component: PartyAddComponent },
  { path: 'party/:id', component: PartyDetailComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'payment/add', component: PaymentAddComponent },
  { path: 'id/:id', component: PageProfileComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'friends', component: FriendsComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PartyListComponent,
    PartyItemComponent,
    PartyDetailComponent,
    LoginComponent,
    FriendsComponent,
    PaymentsComponent,
    RepaymentsComponent,
    ProfileComponent,
    PartyAddComponent,
    PaymentAddComponent,
    PageProfileComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
  ],
  providers: [
    AsyncService,
    // {
    //   provide: XSRFStrategy,
    //   useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
