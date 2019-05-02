import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../../shared/interfaces';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  filteredCustomers: ICustomer[] = [];
  customersOrderTotal: number;
  currencyCode: string = 'USD';

  constructor() { }

  ngOnInit() {
  }

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    })
  }
}
