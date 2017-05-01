import {Component, Input, OnInit} from '@angular/core';
import {IPostParty} from '../shared/models/imodels';
import {AsyncService} from '../shared/models/async.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-party-change',
  templateUrl: './party-change.component.html',
  styleUrls: ['./party-change.component.css']
})
export class PartyChangeComponent implements OnInit {

  @Input() post_party: IPostParty = {
    name: '',
    date: null,
    time: null,
    participants: [],
    place: ''
  };
  friends: Array<Object> = [];
  party_id: number;

  constructor(
    private _AsyncService: AsyncService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.party_id = id;
    this.getPartyParticipants();
    this.getPartyForChange(id);
  }

  getPartyForChange(id: number) {
    this._AsyncService.getPartyForChange(id)
      .subscribe((data) => {
        this.post_party = data;
        // console.log(this.post_party);
      });
  }

  getPartyParticipants() {
    this._AsyncService.getPartyParticipants()
      .subscribe((data) => {
        this.friends = data;
      });
  }

  OnSubmit(value) {
    // console.log(value);
    const tmp = value.date.split('-').concat(value.time.split(':'));
    const year = tmp[0];
    const month = tmp[1] - 1;
    const day = tmp[2];
    const hours = tmp[3];
    const minutes = tmp[4];
    const date = new Date(year, month, day, hours, minutes);
    const data = Object.assign({}, { name: value.name}, {datetime: date}, {place: value.place}, {participants: value.participants});
    // console.log(data);
    this._AsyncService.changeParty(JSON.stringify(data), this.party_id)
      .subscribe(() => {
        this.router.navigate(['/parties']);
      });
  }

}
