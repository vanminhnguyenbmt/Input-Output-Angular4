import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-color-picker',
    templateUrl: './color-picker.component.html',
    styleUrls: ['./color-picker.component.css']
})
export class ColorPickerComponent implements OnInit {

    @Output() colorConnector = new EventEmitter<string>();

    public colors: string[] = [];

    constructor() { }

    ngOnInit() {
        this.colors = ['red', 'green', 'blue', 'gray', '#ccc', 'orange', 'purple'];
    }

    outColor(color) {
        this.colorConnector.emit(color);
    }
}
