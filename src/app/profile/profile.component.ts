import {Component, Input, OnInit} from '@angular/core';
import {IMyProfile} from '../shared/models/imodels';
import {AsyncService} from '../shared/models/async.service';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() profile: IMyProfile;
  id: number;

  constructor(
    private _AsyncService: AsyncService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.getProfileMyPage();
  }

  // private getProfilePage() {
  //   this._AsyncService.getMyProfileId()
  //     .flatMap((data) => {
  //     this.id = data;
  //     console.log(this.id);
  //     return this._AsyncService.getProfile(this.id);
  //     }).subscribe((new_data) => {
  //     this.profile = new_data;
  //     console.log(new_data);
  //   });
  //
  // }
  private getProfileMyPage() {
    this._AsyncService.getMyProfile()
      .subscribe((data) => {
        this.router.navigate(['/id', data]);
        // console.log('1foiehfoie');
        // this.profile = data;
        // });
      });
  }

}

// this._AsyncService.getProfile(this.id)
//   .subscribe((new_data) => {
//     this.profile = new_data;
//     // console.log(new_data);
//   });
