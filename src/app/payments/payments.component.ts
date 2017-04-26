import {Component, Input, OnInit} from '@angular/core';
import {AsyncService} from '../shared/models/async.service';
import {IPayment} from '../shared/models/imodels';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  @Input() payments: IPayment[] = [];

  constructor(
    private _AsyncService: AsyncService
  ) { }

  ngOnInit() {
    this.getPaymentsList();
  }

  private getPaymentsList() {
    this._AsyncService.getPayments()
      .subscribe((data) => {
        this.payments = data;
        // console.log(data);
      });
  }

}
