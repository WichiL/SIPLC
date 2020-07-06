import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate {

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      this.router.navigate(['']);
      console.log(this.auth.isAuthenticated())
      // console.log("AUTENTICADO BFL")
      return true;
    }
    return true;
  }

  constructor(private Token: TokenService,
    private auth: AuthService,
    private router: Router) { }
  
}
