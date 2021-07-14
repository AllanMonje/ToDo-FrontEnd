import { Component} from '@angular/core';
import {} from '@angular/router';
import { AppService } from '../../app.service';
import {Router} from '@angular/router';

@Component({
    selector: 'cambio',
    templateUrl: './cambio.component.html'
})

export class CambioComponent {

    public Usuario = {
        email:"",
        password:""

    }

    constructor(public service:AppService, public router: Router){
    }

    cambiar_contrasena(){ //se llama del html
        var response;
       //login se llama del servicio 
        this.service.cambiar_contrasena(this.Usuario).subscribe( data =>  {
            console.log(data);
            
         this.router.navigate(["/login"])
        },
        error => console.log(error)
      )
    }

    
    
}