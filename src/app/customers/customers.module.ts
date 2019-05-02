import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { FilterTextboxComponent } from './filter-textbox/filter-textbox.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [ CustomersComponent, CustomerListComponent, FilterTextboxComponent ],
    imports: [ CommonModule, SharedModule, FormsModule ],
    exports: [ CustomersComponent ]
})
export class CustomersModule { }
