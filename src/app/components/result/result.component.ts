import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    @Input('color') color: string;
    @Input('size') size: string;

    public content = `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    constructor() { }

    ngOnInit() {
    }

    setStyles() {
        return {
            'color': this.color,
            'font-size': this.size + 'px'
        };
    }
}
