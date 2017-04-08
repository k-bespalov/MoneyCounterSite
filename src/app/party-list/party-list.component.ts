import { Component, OnInit } from '@angular/core';
import {IParty} from '../shared/models/iparty';
import {PartiesAsyncService} from '../shared/models/parties-async.service';

@Component({
  selector: 'app-party-list',
  templateUrl: './party-list.component.html',
  styleUrls: ['./party-list.component.css']
})
export class PartyListComponent implements OnInit {


  parties: IParty[] = [];

  constructor(private partiesAsyncService: PartiesAsyncService) {
  }

  ngOnInit() {
    this.try_get();
  }

  private try_get() {
    this.partiesAsyncService.getParties()
      .subscribe((data) => {
      this.parties = data;
      });
  }

}



