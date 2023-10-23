import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { HeaderComponent } from './header.component';
describe('HeaderComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            imports: [
                SharedModule
            ],
            declarations: [
                HeaderComponent,
                UserDetailsComponent
            ]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=header.component.spec.js.map