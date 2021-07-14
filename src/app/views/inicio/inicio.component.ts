import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
})
export class InicioComponent {

  constructor( public service:AppService, public router: Router) { }

  ngOnInit(): void {
  }

}
