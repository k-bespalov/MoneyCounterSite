import {Component, Input, OnInit} from '@angular/core';
import {IPostPayment} from '../shared/models/imodels';

@Component({
  selector: 'app-payment-add',
  templateUrl: './payment-add.component.html',
  styleUrls: ['./payment-add.component.css']
})
export class PaymentAddComponent implements OnInit {

  @Input() post_party: IPostPayment = {
    id: 0,
    description: '',
    cost: 0
  };

  constructor() { }

  ngOnInit() {
  }

}
