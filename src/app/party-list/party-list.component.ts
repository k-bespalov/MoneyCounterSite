import { Component, OnInit } from '@angular/core';
import {IParty} from '../shared/models/imodels';
import {AsyncService} from '../shared/models/async.service';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {


  parties: IParty[] = [];
  page_num = 1;
  hasNextPage = null;

  constructor(
    private _AsyncService: AsyncService
  ) { }

  ngOnInit() {
    this.getPartyList(1);
  }

  private getPartyList(page: number) {
    this._AsyncService.getParties(page)
      .subscribe((data) => {
      this.parties = this.parties.concat(data['parties']);
      this.page_num += 1;
      this.hasNextPage = data['next_page'];
       console.log(this.page_num);
       console.log(this.hasNextPage);
      });
  }

}



