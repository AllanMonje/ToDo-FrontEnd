import { Component} from '@angular/core';
import {} from '@angular/router';
import { AppService } from '../../app.service';
import {Router} from '@angular/router';

@Component({
    selector: 'olvido',
    templateUrl: './olvido.component.html'//,
   // styleUrls: ["./register.component.css"]
})

export class OlvidoComponent {

    public Usuario = {
        email:"",

    }
//hola
    constructor(public service:AppService, public router: Router){
    }

    enviar_correo(){ //se llama del html
        var response;
       //login se llama del servicio 
        this.service.enviar_correo(this.Usuario).subscribe( data =>  {
            console.log(data);
            this.router.navigate(["/"])
        },
        error => console.log(error)
      )
    }

    
    
}