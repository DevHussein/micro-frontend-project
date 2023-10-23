import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from './user-details.component';
describe('UserDetailsComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            imports: [
                SharedModule
            ],
            declarations: [UserDetailsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UserDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-details.component.spec.js.map