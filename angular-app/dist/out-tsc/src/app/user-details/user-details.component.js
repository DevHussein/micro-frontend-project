import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import * as _ from 'underscore';
import { EventKeys } from '../services/broadcast.service';
export let UserDetailsComponent = class UserDetailsComponent {
    constructor(broadcastService) {
        this.broadcastService = broadcastService;
        this.loggedInUserName = "";
        this.isLoggedIn = false;
        this.notify = new EventEmitter();
        _.bindAll(this, "loginSuccessful");
        this.broadcastService.on(EventKeys.USER_LOGIN_EVENT)
            .subscribe(this.loginSuccessful);
    }
    ngOnInit() {
    }
    onLoginClicked() {
        console.log(`UserDetailsComponent : onLoginClicked()`);
        this.notify.emit("UserDetailsComponent : emit value");
        this.broadcastService.broadcast(EventKeys.LOGIN_BUTTON_CLICKED, "UserDetailsComponent: broadcast : LOGIN_BUTTON_CLICKED");
    }
    loginSuccessful(event) {
        console.log(`UserDetailsComponent.loginSuccessful : ${event}`);
        this.loggedInUserName = event;
        this.isLoggedIn = true;
    }
    onLogoutClicked() {
        this.loggedInUserName = "";
        this.isLoggedIn = false;
    }
};
__decorate([
    Output()
], UserDetailsComponent.prototype, "notify", void 0);
UserDetailsComponent = __decorate([
    Component({
        selector: 'app-user-details',
        templateUrl: './user-details.component.html',
        styleUrls: ['./user-details.component.scss']
    })
], UserDetailsComponent);
//# sourceMappingURL=user-details.component.js.map