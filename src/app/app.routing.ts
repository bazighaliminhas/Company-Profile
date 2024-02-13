import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { SignupComponent } from './examples/AboutUs/AboutUs.component';
import { LandingComponent } from './examples/landing/landing.component';
// import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { SnapPromiseComponent } from './examples/snap-promise/snap-promise.component';
import { ESyncMateComponent } from './examples/e-sync-mate/e-sync-mate.component';
import { InterwoodComponent } from './examples/interwood/interwood.component';
import { BizMateComponent } from './examples/biz-mate/biz-mate.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'AboutUs',           component: SignupComponent },
    // { path: 'nucleoicons',      component: NucleoiconsComponent },
    { path: 'SnapPromise',      component: SnapPromiseComponent },
    { path: 'ESyncMate',      component: ESyncMateComponent },
    { path: 'Interwood',      component: InterwoodComponent },
    { path: 'BizMate',      component: BizMateComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
