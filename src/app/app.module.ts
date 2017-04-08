import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PartyListComponent } from './party-list/party-list.component';
import { PartyItemComponent } from './party-item/party-item.component';
import {PartiesAsyncService} from './shared/models/parties-async.service';

@NgModule({
  declarations: [
    AppComponent,
    PartyListComponent,
    PartyItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PartiesAsyncService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
