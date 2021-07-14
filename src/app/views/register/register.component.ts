import { Component} from '@angular/core';
import {} from '@angular/router';
import { AppService } from '../../app.service';
import {Router} from '@angular/router';

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ["./register.component.css"]
})

export class RegisterComponent {

    public Usuario = {
        email:"",
        password:"",

    }
//hola
    constructor(public service:AppService, public router: Router){
    }

    register(){ //se llama del html
        var response;
       //login se llama del servicio 
        this.service.register(this.Usuario).subscribe( data =>  {
            console.log(data);
            this.router.navigate(["/tareas", {email:data.dataUser.email} ])
        },
        error => console.log(error)
      )
    }

    
    
}