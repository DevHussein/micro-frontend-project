import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { EventKeys } from './services/broadcast.service';
import * as _ from "lodash";
export let microEventBus = window.microEventBus;
export let AppComponent = class AppComponent {
    constructor(broadCastService, scriptLoaderService, cd) {
        this.scriptLoaderService = scriptLoaderService;
        this.cd = cd;
        this.title = 'angular-app';
        this.hideProducts = false;
        this.hideShoppingCart = true;
        this.hideOrderPlaced = true;
        this.hideShoppingCartRegion = false;
        this.username = "";
        this.shoppingCartStyles = "split right";
        this.sidenav = null;
        _.bindAll(this, [
            "onLoginClicked",
            "onLoginEvent",
            "toggleCheckoutOnly",
            "toggleContinueShopping",
            "togglePlaceOrder"
        ]);
        broadCastService.on(EventKeys.LOGIN_BUTTON_CLICKED)
            .subscribe(this.onLoginClicked);
        broadCastService.on(EventKeys.USER_LOGIN_EVENT)
            .subscribe(this.onLoginEvent);
        microEventBus.on("checking-out")
            .subscribe(this.toggleCheckoutOnly);
        microEventBus.on("continue-shopping")
            .subscribe(this.toggleContinueShopping);
        microEventBus.on("place-order")
            .subscribe(this.togglePlaceOrder);
    }
    ngOnInit() {
        // createReactApp();
        this.scriptLoaderService.loadAllScripts("/assets/react/build/static/js/2.c1473afa.chunk.js", "/assets/react/build/static/js/main.f4a103d4.chunk.js").subscribe(() => {
            console.log(`script loaded`);
        });
        Vue.createApp(ShoppingCartVue).mount('#vue-application');
    }
    onLoginClicked(event) {
        var _a;
        console.log(`AppComponent received : ${event}`);
        (_a = this.sidenav) === null || _a === void 0 ? void 0 : _a.open();
    }
    onLoginEvent(username) {
        var _a;
        (_a = this.sidenav) === null || _a === void 0 ? void 0 : _a.close();
        this.hideShoppingCart = false;
        this.username = username;
    }
    toggleCheckoutOnly() {
        this.shoppingCartStyles = "split";
        this.hideProducts = true;
        this.cd.detectChanges();
    }
    toggleContinueShopping() {
        this.shoppingCartStyles = "split right";
        this.hideProducts = false;
        this.cd.detectChanges();
    }
    togglePlaceOrder() {
        this.hideShoppingCartRegion = true;
        this.hideProducts = true;
        this.hideOrderPlaced = false;
        this.cd.detectChanges();
    }
};
__decorate([
    ViewChild("sidenav")
], AppComponent.prototype, "sidenav", void 0);
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
//# sourceMappingURL=app.component.js.map