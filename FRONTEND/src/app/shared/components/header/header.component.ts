import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedIn: boolean
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter()

  constructor(private Auth: AuthService,
    private router: Router,
    private Token: TokenService) { }

  ngOnInit() {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit()
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      )
    }, 300)
  }

  logout(event: MouseEvent) {
    event.preventDefault()
    this.Token.remove()
    this.router.navigateByUrl('/login')
  }
}
