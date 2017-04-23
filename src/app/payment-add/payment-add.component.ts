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
    id: 0,
    description: '',
    cost: 0
  };
  @Input() choose_party_list: IChooseParty[] = [];

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
    if (value.id === 0 || value.description === '' ) {
      alert('Выберите тусовку!');
      return;
    }
    // console.log(value.id);
    this._AsyncService.postPayment(JSON.stringify(value))
      .subscribe(() => {
        this.router.navigate(['/payments']);
      });
  }

}
