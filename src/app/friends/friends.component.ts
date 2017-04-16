import {Component, Input, OnInit} from '@angular/core';
import {AsyncService} from '../shared/models/async.service';
import {IProfileItem} from '../shared/models/imodels';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  @Input() friends: IProfileItem[] = [];

  constructor(private _AsyncService: AsyncService ) { }

  ngOnInit() {
    this.getFriendsList();
  }

  private getFriendsList() {
    this._AsyncService.getFriends()
      .subscribe((data) => {
        this.friends = data;
      });
  }

}
