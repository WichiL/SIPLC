import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MsjSweetService } from 'src/app/services/msj-sweet.service';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JarwisService } from 'src/app/services/jarwis.service';
import { TokenService } from 'src/app/services/token.service';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.scss']
})
  
export class RegistrarUsuariosComponent implements OnInit {
  formularioRegistro: FormGroup
  public error = []
  hide1 = true
  hide2 = true

  constructor(private fb: FormBuilder,
    private Jarwis: JarwisService,
    private msj: MsjSweetService,
    private Token: TokenService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formularioRegistro = this.fb.group({
      name: [null, Validators.required ],
      email: [null, Validators.compose([
        Validators.required,
        Validators.email
      ])],
      password: [null, Validators.required],
      password_confirmation: [null, Validators.required]   
    })
  }

  matcher = new MyErrorStateMatcher
  
  public hasError = (controlName: string, errorName: string) => {
    return this.formularioRegistro.controls[controlName].hasError(errorName);
  }

  registrar() {
    this.Jarwis.registrar(this.formularioRegistro.value).subscribe(x => {
      data => this.handleResponse(data)
      this.msj.msjToastCorrecto("Usuario registrado exitosamente!")
      //AGREGAR AQUI REDIRECCION A PAGINA DE USUARIOS
    }, err => {
        const validationErrors = err.error.errors;
        console.log(err.error.errors)
        if (err instanceof HttpErrorResponse) {
          const errorMessages = new Array<{ propName: string; errors: string }>();
    
          if (err.status === 422) {
            this.msj.msjToastError("Error al registrar!")
            Object.keys(validationErrors).forEach(prop => {
              const formControl = this.formularioRegistro.get(prop);
              if (formControl) {
                // Activa los msjs de error
                formControl.setErrors({
                  serverError: validationErrors[prop]
                });
              }
            });
          }
        }
      }
    )
  }

  handleResponse(data) {
    this.Token.handle(data.access_token)
    this.router.navigateByUrl('/perfil')
  }
  errorRequest(error) {    
    console.log(error.error.errors)
    this.msj.msjToastErrorClose(JSON.stringify((this.error = error.error.errors)))
  }

}
