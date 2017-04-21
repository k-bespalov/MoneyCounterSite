import {Component, Input, OnInit} from '@angular/core';
import {IPostParty} from '../shared/models/imodels';
import {AsyncService} from "../shared/models/async.service";

@Component({
  selector: 'app-party-add',
  templateUrl: './party-add.component.html',
  styleUrls: ['./party-add.component.css']
})
export class PartyAddComponent implements OnInit {

  @Input() post_party: IPostParty = {
    name: '',
    date: new Date,
    time: new Date,
    place: ''
  };

  constructor(private _AsyncService: AsyncService) { }

  ngOnInit() {
  }

  OnSubmit(value) {
    // console.log(value.value.date);
    const tmp = value.value.date.split('-').concat(value.value.time.split(':'));
    const year = tmp[0];
    const month = tmp[1] - 1;
    const day = tmp[2];
    const hours = tmp[3];
    const minutes = tmp[4];
    const date = new Date(year, month, day, hours, minutes);
    const data = Object.assign({}, { name: value.value.name}, {datetime: date}, {place: value.value.place});
    // console.log(data);
    this._AsyncService.postParty(JSON.stringify(data))
      .subscribe();
  }

}
