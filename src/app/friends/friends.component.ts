import {Component, Input, OnInit} from '@angular/core';
import {AsyncService} from '../shared/models/async.service';
import {IFriendSearch, IProfileItem} from '../shared/models/imodels';
import {FindFriendsService} from '../shared/models/find-friends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  @Input() friends: IProfileItem[] = [];
  @Input() results: IFriendSearch[] = [];

  constructor(
    private _AsyncService: AsyncService,
    private _FindFriendsService: FindFriendsService,
  ) { }

  ngOnInit() {
    this.getResultsList();
    this.getFriendsList();
  }

  private getFriendsList() {
    this._AsyncService.getFriends()
      .subscribe((data) => {
        this.friends = data;
      });
  }

  private getResultsList() {
    this._FindFriendsService.searchFunction()
      .flatMap((data) => {
        // console.log(data);
        return this._AsyncService.sendText(data);
      }).subscribe((new_data) => {
      this.results = new_data;
      // console.log(new_data);
    });
  }

}
