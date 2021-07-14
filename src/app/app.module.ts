import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {AppRoutingModule} from './app.router';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {TareasComponent} from './views/tareas/tareas.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { NavbarComponent } from './views/navbar/navbar.component';
import { AppGuard } from './app.guard';
import { OlvidoComponent } from './views/olvidarContraseña/olvido.component';
import { CambioComponent } from './views/cambioContraseña/cambio.component';
import { InicioComponent } from './views/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TareasComponent,
    NavbarComponent,
    OlvidoComponent,
    CambioComponent,
    InicioComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AppService,
    AppGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
