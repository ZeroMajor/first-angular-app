import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'sub-header',
    templateUrl: './sub-header.html',  
})
export class SubHeader implements OnInit {
    subHeader: string;

    ngOnInit() {
        this.subHeader = "My custom subheader";
    }
}