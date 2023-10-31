import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginFormComponent } from './components/usuarios/login-form/login-form.component';
import { RegisterComponent } from './components/usuarios/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios/listar-usuarios.component';
import { EditarClientesComponent } from './components/editar-clientes/editar-clientes/editar-clientes.component';
import { EditarPageComponent } from './pages/editar-page/editar-page.component';
import { ListarPeliculasComponent } from './components/peliculas/listar-peliculas/listar-peliculas.component';
import { EditarListasComponent } from './components/listas/editar-listas/editar-listas.component';
import { PerfilUsuarioPageComponent } from './pages/perfil-usuario-page/perfil-usuario-page.component';
import { ListasPageComponent } from './pages/listas-page/listas-page.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterComponent,
    NavbarComponent,
    HomePagesComponent,
    LoginPageComponent,
    RegisterPagesComponent,
    ListarUsuariosComponent,
    EditarClientesComponent,
    EditarPageComponent,
    ListarPeliculasComponent,
    EditarListasComponent,
    PerfilUsuarioPageComponent,
    ListasPageComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
