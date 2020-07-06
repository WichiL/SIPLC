import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './modules/login/login.component';
import { RequestResetComponent } from './modules/request-reset/request-reset.component';
import { ResponseResetComponent } from './modules/response-reset/response-reset.component';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { RegistrarUsuariosComponent } from './modules/registrar-usuarios/registrar-usuarios.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

const routes: Routes = [
  {
    path: '', component: DefaultComponent, canActivate: [AfterLoginService], children: [
      { path: '', component: DashboardComponent  },
      { path: 'posts', component: PostsComponent  },
      { path: 'perfil', component: PerfilComponent  },
      { path: 'request-password-reset', component: RequestResetComponent  },
      { path: 'response-password-reset', component: ResponseResetComponent  },
      //ADMIN
      { path: 'registrar-usuario', component: RegistrarUsuariosComponent }
    ]  
  },
  
  { path: 'login', component: LoginComponent, canActivate: [BeforeLoginService] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }