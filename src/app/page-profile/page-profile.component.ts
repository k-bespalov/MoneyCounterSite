import {Component, Input, OnInit} from '@angular/core';
import {AsyncService} from '../shared/models/async.service';
import {ActivatedRoute} from '@angular/router';
import {IProfile} from '../shared/models/imodels';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {
  @Input() profile: IProfile;

  constructor(
    private _AsyncService: AsyncService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.getProfileDetail(id);
  }

  private getProfileDetail(id: number) {
    this._AsyncService.getProfile(id)
      .subscribe((data) => {
        this.profile = data;
      });
  }

  OnClick(id: number) {
    this._AsyncService.changeFriendStatus(id)
      .subscribe(() => {
          this.profile.friend_status = !(this.profile.friend_status);
          console.log(this.profile.friend_status);
        });

  }

}
