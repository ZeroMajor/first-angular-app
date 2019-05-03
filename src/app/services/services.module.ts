import { NgModule } from '@angular/core';
import { DataService } from './data.service';
import { SorterService } from './sorter.service';

@NgModule({
    providers: [DataService, SorterService]
})
export class ServicesModule { }