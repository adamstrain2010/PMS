import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { RoundButtonComponent } from './components/round-button/round-button.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavLink} from './models/nav-link.model';
import { HeaderComponent } from './components/header/header.component';
@NgModule({
  declarations: [SideBarComponent, RoundButtonComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SideBarComponent,
    RoundButtonComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
