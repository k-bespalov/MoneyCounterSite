import {Component, Input, OnInit} from '@angular/core';
import {AsyncService} from '../shared/models/async.service';
import {IPartyDetail} from '../shared/models/imodels';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-party-detail',
  templateUrl: './party-detail.component.html',
  styleUrls: ['./party-detail.component.css']
})
export class PartyDetailComponent implements OnInit {
  @Input() party: IPartyDetail;
  id: number;

  constructor(
    private _AsyncService: AsyncService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.route.params
    //   .subscribe((params: Params) => this.getPartyDetail(+params['id']));
    const id = +this.route.snapshot.params['id'];
    this.id = id;
    this.getPartyDetail(id);
  }

  private getPartyDetail(id: number) {
    this._AsyncService.getPartyDetail(id)
      .subscribe((data) => {
      this.party = data;
    });
  }
}
