import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor( public service:AppService, public router: Router) { }

  ngOnInit(): void {
  }

  logOut(){ //se llama del html
    var response;
   //login se llama del servicio 
    this.service.logOut();
     this.router.navigate(["/login"])
  
}

}
