import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AngularBroadcastService } from './services/broadcast.service';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ScriptLoaderService } from './services/ScriptLoaderService';
export let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            HeaderComponent,
            UserDetailsComponent,
            LoginComponent
        ],
        imports: [
            AppRoutingModule,
            SharedModule,
            HttpClientModule,
        ],
        providers: [
            AngularBroadcastService,
            ScriptLoaderService,
        ],
        bootstrap: [AppComponent]
    })
], AppModule);
//# sourceMappingURL=app.module.js.map