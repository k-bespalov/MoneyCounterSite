import {Component, Input, OnInit} from '@angular/core';
import {IPayment} from '../shared/models/imodels';
import {AsyncService} from '../shared/models/async.service';

@Component({
  selector: 'app-repayments',
  templateUrl: './repayments.component.html',
  styleUrls: ['./repayments.component.css']
})
export class RepaymentsComponent implements OnInit {

  @Input() to_me: IPayment[] = [];
  @Input() from_me: IPayment[] = [];

  to_me_status: boolean;
  from_me_status: boolean;

  constructor(
    private _AsyncService: AsyncService
  ) { }

  ngOnInit() {
    this.fromMe();
  }

  fromMe() {
    this.getRepaymentsFromMe();
    this.from_me_status = true;
    this.to_me_status = false;
  }

  toMe() {
    this.getRepaymentsToMe();
    this.to_me_status = true;
    this.from_me_status = false;
  }

  setPayed(id: number) {
    this._AsyncService.setPayed(id)
      .subscribe(() =>
      this.getRepaymentsToMe());
  }

  private getRepaymentsFromMe() {
    this._AsyncService.getRepaymentsFromMe()
      .subscribe((data) => {
        this.from_me = data;
        // console.log(data);
      });
  }

  private getRepaymentsToMe() {
    this._AsyncService.getRepaymentsToMe()
      .subscribe((data) => {
        this.to_me = data;
        // console.log(data);
      });
  }

}
