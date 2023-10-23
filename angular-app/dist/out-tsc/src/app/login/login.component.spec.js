import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { AngularBroadcastService, EventKeys } from '../services/broadcast.service';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
describe('/src/app/login/login.component.ts', () => {
    let component;
    let fixture;
    let broadcastService;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            imports: [
                SharedModule
            ],
            declarations: [
                LoginComponent
            ],
            providers: [
                FormBuilder,
                AngularBroadcastService
            ]
        }).compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        broadcastService = TestBed.inject(AngularBroadcastService);
        spyOn(broadcastService, 'broadcast');
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
    it('should set form fields correctly on startup', () => {
        var _a, _b;
        expect(component.loginForm).toBeDefined();
        expect((_a = component.loginForm) === null || _a === void 0 ? void 0 : _a.value.username).toEqual("");
        expect((_b = component.loginForm) === null || _b === void 0 ? void 0 : _b.value.password).toEqual("");
    });
    it('should set form validity correctly', () => {
        var _a, _b;
        expect(component.isFormValid()).toBeFalse();
        (_a = component.loginForm) === null || _a === void 0 ? void 0 : _a.controls["username"].setValue("test_username");
        expect(component.isFormValid()).toBeFalse();
        (_b = component.loginForm) === null || _b === void 0 ? void 0 : _b.controls["password"].setValue("test_password");
        expect(component.isFormValid()).toBeTrue();
    });
    it('should broadcast an event when the Login button is clicked', () => {
        var _a, _b;
        (_a = component.loginForm) === null || _a === void 0 ? void 0 : _a.controls["username"].setValue("test_username");
        (_b = component.loginForm) === null || _b === void 0 ? void 0 : _b.controls["password"].setValue("test_password");
        fixture.detectChanges();
        const loginButton = fixture.debugElement
            .nativeElement.querySelector("#submit_button");
        expect(loginButton.disabled).toBeFalsy();
        loginButton.click();
        expect(broadcastService.broadcast)
            .toHaveBeenCalledWith(EventKeys.USER_LOGIN_EVENT, "test_username");
    });
});
//# sourceMappingURL=login.component.spec.js.map