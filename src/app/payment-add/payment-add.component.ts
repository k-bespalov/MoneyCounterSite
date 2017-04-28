import {Component, Input, OnInit} from '@angular/core';
import {IChooseParty, IPostPayment} from '../shared/models/imodels';
import {AsyncService} from '../shared/models/async.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css']
})
export class PaymentAddComponent implements OnInit {

  @Input() post_payment: IPostPayment = {
    id: null,
    payers: [],
    description: '',
    cost: null,
  };
  @Input() choose_party_list: IChooseParty[] = [];

  payers_list: Array<Object> = [];

  constructor(
    private _AsyncService: AsyncService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getVariantsParty();
  }

  private getVariantsParty() {
    this._AsyncService.getPartyVariants()
      .subscribe((data) => {
        this.choose_party_list = data;
        // console.log(data);
      });
  }

  OnSubmit(value) {
    this._AsyncService.postPayment(JSON.stringify(value))
      .subscribe(() => {
        this.router.navigate(['/payments']);
      });
  }

  OnChange(value) {
    console.log(value);
    this._AsyncService.getPayersList(value)
      .subscribe((data) => {
        this.payers_list = data;
        // console.log(this.payers_list);
      });
  }

}
