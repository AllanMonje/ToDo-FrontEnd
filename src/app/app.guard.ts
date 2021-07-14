import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AppService } from './app.service';

@Injectable()

export class AppGuard implements CanActivate{

    constructor(public service:AppService, public router:Router){

    }
    canActivate():boolean{
            if(this.service.getToken()){
                if(this.service.getToken()){
                    return true;
                }
            }else{
                this.router.navigateByUrl('/login');
  			    return false;
            }
            ;

        }


}