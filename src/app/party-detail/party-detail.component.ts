import {Component, Input, OnInit} from '@angular/core';
import {PartiesAsyncService} from '../shared/models/parties-async.service';
import {PartyDetail} from '../shared/models/iparty';

@Component({
  selector: 'app-party-detail',
  templateUrl: './party-detail.component.html',
  styleUrls: ['./party-detail.component.css']
})
export class PartyDetailComponent implements OnInit {
  @Input() party: PartyDetail;



  constructor(private partiesAsyncService: PartiesAsyncService) { }

  ngOnInit() {
    this.getPartyDetail(1);
  }

  private getPartyDetail(id: number) {
    this.partiesAsyncService.getPartyDetail(id)
      .subscribe((data) => {
      this.party = data;
    });
  }
}
