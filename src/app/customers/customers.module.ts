import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

@NgModule({
    declarations: [CustomersComponent, CustomerListComponent],
    imports: [CommonModule],
    exports: [CustomersComponent]
})
export class CustomersModule { }
