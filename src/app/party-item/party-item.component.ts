import {Component, Input, OnInit} from '@angular/core';
import {IParty} from '../shared/models/imodels';

@Component({
  selector: 'app-party-item',
  templateUrl: './party-item.component.html',
  styleUrls: ['./party-item.component.css']
})
export class PartyItemComponent implements OnInit {

  @Input() party: IParty;

  constructor() { }

  ngOnInit() {
  }

}
