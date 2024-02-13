import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './AboutUs/AboutUs.component';
import { SnapPromiseComponent } from './snap-promise/snap-promise.component';
import { ESyncMateComponent } from './e-sync-mate/e-sync-mate.component';
import { InterwoodComponent } from './interwood/interwood.component';
import { BizMateComponent } from './biz-mate/biz-mate.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
    ],
    declarations: [
        LandingComponent,
        SignupComponent,
        ProfileComponent,
        SnapPromiseComponent,
        ESyncMateComponent,
        InterwoodComponent,
        BizMateComponent
    ]
})
export class ExamplesModule { }
