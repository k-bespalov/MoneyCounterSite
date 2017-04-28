import {Component, Input, OnInit} from '@angular/core';
import {IPostParty} from '../shared/models/imodels';
import {AsyncService} from '../shared/models/async.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-party-add',
  templateUrl: './party-add.component.html',
  styleUrls: ['./party-add.component.css']
})
export class PartyAddComponent implements OnInit {

  @Input() post_party: IPostParty = {
    name: '',
    date: null,
    time: null,
    participants: [],
    place: ''
  };
  friends: Array<Object> = [];

  constructor(
    private _AsyncService: AsyncService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getPartyParticipants();
  }

  getPartyParticipants() {
    this._AsyncService.getPartyParticipants()
      .subscribe((data) => {
      this.friends = data;
      });
  }

  OnSubmit(value) {
    // console.log(value.date);
    const tmp = value.date.split('-').concat(value.time.split(':'));
    const year = tmp[0];
    const month = tmp[1] - 1;
    const day = tmp[2];
    const hours = tmp[3];
    const minutes = tmp[4];
    const date = new Date(year, month, day, hours, minutes);
    const data = Object.assign({}, { name: value.name}, {datetime: date}, {place: value.place}, {participants: value.participants});
    // console.log(data);
    this._AsyncService.postParty(JSON.stringify(data))
      .subscribe(() => {
        this.router.navigate(['/parties']);
      });
  }

}
