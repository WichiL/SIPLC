import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';

@Injectable({ 
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {

  canActivate(): boolean {
    if (this.auth.isAuthenticated()) {
      console.log(this.auth.isAuthenticated())
      // console.log("Autenticado")
      return true;
    }
    this.router.navigate(['login']);
    console.log(this.auth.isAuthenticated())
    // console.log("No autenticado")
    return false;
  }

  constructor(private Token: TokenService,
    private auth: AuthService,
    private router: Router) { }
}
 