import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';

@NgModule({
    declarations: [CustomersComponent, CustomerListComponent, FilterTextboxComponent],
    imports: [CommonModule],
    exports: [CustomersComponent]
})
export class CustomersModule { }
