import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginView } from './components/login/login.view';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [LoginView, LoginBoxComponent, LoginFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ]
})
export class LoginModule { }
