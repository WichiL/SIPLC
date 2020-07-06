import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { MsjSweetService } from 'src/app/services/msj-sweet.service';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup
  hide = true
  public error = null

  constructor(private fb: FormBuilder,
    private Jarwis: JarwisService,
    private msj: MsjSweetService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService
  ) { }
 
  
  ngOnInit() {
    
    this.formularioLogin = this.fb.group({
      email: ['', Validators.compose([
        Validators.email, Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    })
  }

  matcher = new MyErrorStateMatcher
  
  public hasError = (controlName: string, errorName: string) => {
    return this.formularioLogin.controls[controlName].hasError(errorName);
  }
  
  onSubmit() {
    this.Jarwis.login(this.formularioLogin.value).subscribe(
      data => this.handleResponse(data),
      error => this.errorRequest(error)
    )
  }

  handleResponse(data) {
    this.Token.handle(data.access_token)
    // this.Auth.changeAuthStatus(true)
    this.router.navigateByUrl('')
  }

  errorRequest(error) {    
    this.msj.msjToastErrorClose(this.error = error.error.error)
  }
}
