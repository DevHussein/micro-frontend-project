import { __decorate } from "tslib";
import { HttpHeaders } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormControl, Validators, } from "@angular/forms";
import { microEventBus } from "../app.component";
import { EventKeys, } from "../services/broadcast.service";
export let LoginComponent = class LoginComponent {
    constructor(formBuilder, broadcastService, http) {
        this.formBuilder = formBuilder;
        this.broadcastService = broadcastService;
        this.http = http;
        this.loginForm = null;
        this.errorMessage = "";
    }
    ngOnInit() {
        console.log(`buildForm()`);
        this.buildForm();
    }
    buildForm() {
        let form = {
            username: new FormControl({}, Validators.required),
            password: new FormControl({}, Validators.required),
        };
        let formState = {
            username: {
                value: "",
                disabled: false,
            },
            password: {
                value: "",
                disabled: false,
            },
        };
        this.loginForm = this.formBuilder.group(form);
        this.loginForm.reset(formState);
    }
    isFormValid() {
        var _a;
        return (_a = this.loginForm) === null || _a === void 0 ? void 0 : _a.valid;
    }
    onSubmit(event) {
        var _a, _b, _c, _d;
        console.log(`event : ${event.submitter.id}`);
        // event.submitter.id
        console.log(`onSubmit: username : ${(_a = this.loginForm) === null || _a === void 0 ? void 0 : _a.value.username}`);
        console.log(`onSubmit: password : ${(_b = this.loginForm) === null || _b === void 0 ? void 0 : _b.value.password}`);
        const headers = new HttpHeaders();
        headers.append("Content-Type", "application/json");
        let userUrl = "https://n55jrj6nra.execute-api.us-east-1.amazonaws.com/Prod/users";
        if (event.submitter.id === "register_button") {
            userUrl =
                "https://n55jrj6nra.execute-api.us-east-1.amazonaws.com/Prod/register";
        }
        this.http
            .post(userUrl, {
            username: (_c = this.loginForm) === null || _c === void 0 ? void 0 : _c.value.username,
            password: (_d = this.loginForm) === null || _d === void 0 ? void 0 : _d.value.password,
        })
            .subscribe(() => {
            var _a, _b;
            console.log(`post complete`);
            // broadcast to angular components
            this.broadcastService.broadcast(EventKeys.USER_LOGIN_EVENT, (_a = this.loginForm) === null || _a === void 0 ? void 0 : _a.value.username);
            // broadcast to micro front end apps
            microEventBus.broadcast("user-logged-in", (_b = this.loginForm) === null || _b === void 0 ? void 0 : _b.value.username);
        }, (error) => {
            console.log(`LoginComponent : error :  ${JSON.stringify(error, null, 4)}`);
            this.errorMessage = "An error occurred.";
        });
    }
    hasError() {
        return this.errorMessage.length > 0;
    }
};
LoginComponent = __decorate([
    Component({
        selector: "app-login",
        templateUrl: "./login.component.html",
        styleUrls: ["./login.component.scss"],
    })
], LoginComponent);
//# sourceMappingURL=login.component.js.map