import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {TareasComponent} from './views/tareas/tareas.component';
import { NavbarComponent } from './views/navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { AppGuard } from './app.guard';
import { OlvidoComponent } from './views/olvidarContraseña/olvido.component';
import { CambioComponent } from './views/cambioContraseña/cambio.component';
import { InicioComponent } from './views/inicio/inicio.component';


const routes: Routes = [
    {
    path: 'login',
    component: LoginComponent
    },
    {
        path:'register',
        component: RegisterComponent
    },
    {
        path:'tareas',
        component: TareasComponent,  
        canActivate:[AppGuard]
    },
    {
        path:'',
        component: InicioComponent
    },
    {
        path:'olvido',
        component: OlvidoComponent
    },
    {
        path:'cambio_contrasena',
        component: CambioComponent,  
        canActivate:[AppGuard]
    }
];
@NgModule({
    imports: [ CommonModule, FormsModule, RouterModule.forRoot(routes)],
    exports: [ RouterModule],
    declarations: []
})

export class AppRoutingModule{}
