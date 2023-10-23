import { __decorate } from "tslib";
import { Component } from '@angular/core';
export let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
    onUserDetailsEvent(event) {
        console.log(`event : ${event}`);
    }
};
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss']
    })
], HeaderComponent);
//# sourceMappingURL=header.component.js.map