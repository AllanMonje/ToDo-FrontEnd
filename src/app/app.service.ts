import {Injectable} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {JwtResponseI} from './models/jwt-response'
import {UserI} from './models/user'
import {tap } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
@Injectable()
    export class AppService{
        private endpoint:string;
        private token:string;
        private authSubject = new BehaviorSubject<boolean>(false);
        constructor(private httpClient: HttpClient){
            this.endpoint = "http://" + window.location.hostname+":3000/apiUsers";
        }

        get isLogged():Observable<boolean>{
            return this.authSubject.asObservable();
        }

        get_tareas(email: any):Observable<any>{
            return this.httpClient.get(this.endpoint + "/get_tareas?email=" + email, {responseType: 'json'})
        }

        get_tareas_realizadas(email: any):Observable<any>{
            return this.httpClient.get(this.endpoint + "/get_tareas_realizadas?email=" + email, {responseType: 'json'})
        }

        insertarTarea(load):Observable<any>{
            return this.httpClient.post(this.endpoint + "/insertar_tarea",load, {responseType: 'json'})
        }
        
        enviar_correo(load):Observable<any>{
            return this.httpClient.post(this.endpoint + "/send-email",load, {responseType: 'json'})
        }

        login(load: UserI):Observable<JwtResponseI>{
            return this.httpClient.post<JwtResponseI>(this.endpoint + "/login",load).pipe(tap(
             (   res: JwtResponseI) => {
                 if (res){
                     //guardar token
                     this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
                 }
             }
            ));
        }

        register(load: UserI):Observable<JwtResponseI>{
            return this.httpClient.post<JwtResponseI>(this.endpoint + "/insertar_usuario",load).pipe(tap(
             (   res: JwtResponseI) => {
                 if (res){
                     //guardar token
                     this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
                 }
             }
            ));
        }

        logOut(): void{
            this.token = "";
            localStorage.removeItem("ACCESS_TOKEN");
            localStorage.removeItem("EXPIRES_IN");

        }

        actualizar_tarea(load):Observable<any>{
            return this.httpClient.put(this.endpoint + "/update_tarea", 
                                          load, {responseType: 'json'});
         }

        eliminar_tarea(load):Observable<any>{
            return this.httpClient.delete(this.endpoint + "/eliminar_tarea", {params: load, responseType: 'json'})
        }

        cambiar_contrasena(load):Observable<any>{
            return this.httpClient.put(this.endpoint + "/update_usuario", 
                                          load, {responseType: 'json'});
         }

        private saveToken(token: string, expiresIn: string):void{
            localStorage.setItem("ACCESS_TOKEN", token);
            localStorage.setItem("EXPIRES_IN", expiresIn);
            this.token = token;
            
        }

        public getToken():string{
            if(!this.token){
                this.token = localStorage.getItem("ACCESS_TOKEN");
            }
            return this.token;
        }


       
}