import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
export var EventKeys;
(function (EventKeys) {
    EventKeys["ALL"] = "all-events";
    EventKeys["LOGIN_BUTTON_CLICKED"] = "login_button_clicked";
    EventKeys["USER_LOGIN_EVENT"] = "user_login_event";
})(EventKeys || (EventKeys = {}));
export let AngularBroadcastService = class AngularBroadcastService {
    constructor() {
        this.eventBus = new Subject();
    }
    on(key) {
        return this.eventBus.asObservable().pipe(filter(event => event.key === key ||
            event.key === EventKeys.ALL), map(event => event.data));
    }
    broadcast(key, data) {
        this.eventBus.next({ key, data });
    }
};
AngularBroadcastService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AngularBroadcastService);
//# sourceMappingURL=broadcast.service.js.map