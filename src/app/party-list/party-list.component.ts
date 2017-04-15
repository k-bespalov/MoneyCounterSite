import { Component, OnInit } from '@angular/core';
import {IParty} from '../shared/models/iparty';
import {AsyncService} from '../shared/models/async.service';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {


  parties: IParty[] = [];

  constructor(private _AsyncService: AsyncService) {
  }

  ngOnInit() {
    this.getPartyList();
  }

  private getPartyList() {
    this._AsyncService.getParties()
      .subscribe((data) => {
      this.parties = data;
      console.log(data);
      });
  }

}



