import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthMainComponent } from './auth-main/auth-main.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { SharedModule } from '../common-module/shared/shared.module';


@NgModule({
  declarations: [AuthMainComponent, AuthHeaderComponent, AuthLoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
