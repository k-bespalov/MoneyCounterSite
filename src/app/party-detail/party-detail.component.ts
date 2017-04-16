import {Component, Input, OnInit} from '@angular/core';
import {AsyncService} from '../shared/models/async.service';
import {IPartyDetail} from '../shared/models/imodels';

@Component({
  selector: 'app-party-detail',
  templateUrl: './party-detail.component.html',
  styleUrls: ['./party-detail.component.css']
})
export class PartyDetailComponent implements OnInit {
  @Input() party: IPartyDetail;



  constructor(private _AsyncService: AsyncService) { }

  ngOnInit() {
    this.getPartyDetail(1);
  }

  private getPartyDetail(id: number) {
    this._AsyncService.getPartyDetail(id)
      .subscribe((data) => {
      this.party = data;
    });
  }
}
