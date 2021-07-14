import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {} from '@angular/router';
import { AppService } from '../../app.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ["./login.component.css"]
})

export class LoginComponent {

    public Usuario = {
        email:"",
        password:""
    }

    constructor(public service:AppService, public router: Router){
    }

    login(){ //se llama del html
        var response;
       //login se llama del servicio 
        this.service.login(this.Usuario).subscribe( data =>  {
            console.log(data);
         this.router.navigate(["/tareas", {email:data.dataUser.email} ])
        },
        error => console.log(error)
      )
    }
   
    
}