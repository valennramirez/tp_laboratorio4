import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginFormComponent } from './components/usuarios/login-form/login-form.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisterComponent } from './components/usuarios/register/register.component';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';
import { EditarPageComponent } from './pages/editar-page/editar-page.component';

const routes: Routes = [
  {path: 'home', component:HomePagesComponent},
  {path: 'login', component: LoginPageComponent},
  {path:'registrarse', component:RegisterPagesComponent},
  {path:'editar/:id', component:EditarPageComponent},

  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



