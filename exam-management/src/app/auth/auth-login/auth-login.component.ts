import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/common-module/shared/alert.service';
import { LoginModal } from 'src/app/model/login.model';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  loginForm: FormGroup
  isSubmitted = false
  dirty = false
  loginModal: LoginModal = new LoginModal()

  constructor(
    private fb: FormBuilder,
    private _auth: AuthService,
    private _alert: AlertService
  ) { }

  ngOnInit() {
    this.createLoginForm()
  }

  createLoginForm(){
    let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.pattern(emailPattern), Validators.minLength(6)]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  get f(){
    return this.loginForm.controls
  }

  isDirty(){
    this.dirty = true
  }

  reset(){
    this.isSubmitted = false
    this.dirty = false
    this.loginForm.reset()
  }

  submit(){
    this.loginForm.markAllAsTouched()
    this.isSubmitted = true
    if(this.loginForm.invalid){
      this.dirty = true
      return
    }
    this.loginModal = this.loginForm.value
    this._auth.loginUserApi(this.loginModal).subscribe((res: any) => {
      debugger
    },
    
    (err: any) => {
      debugger
    })
    
  }

}
