import { Component, OnInit} from '@angular/core';
import {} from '@angular/router';
import { AppService } from '../../app.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'tareas',
    templateUrl: './tareas.component.html',
    styleUrls: ["./tareas.component.css"]
})

export class TareasComponent implements OnInit {

    public listado_tareas: any[];
    public listado_tareas_realizadas: any[];
    public idusuario2: string;

    public Tareas = {
        id_tarea:"",
        titulo: "",
        descripcion: "",
        estado: "",
        email_usuario: ""
    }

    constructor(public service:AppService, public router: Router, private activatedRouter : ActivatedRoute){
        this.idusuario2= "";
    }

    ngOnInit(): void {
        let idusuario1 = this.activatedRouter.snapshot.params.email;
        console.log(idusuario1);
        this.idusuario2 = idusuario1;
        this.get_tareas();
        this.get_tareas_realizadas();
    }

    get_tareas(){
        var response: any[];
        let idusuario: string;
        idusuario = this.idusuario2;
        this.Tareas.email_usuario = idusuario;
        
        this.service.get_tareas(this.Tareas.email_usuario).subscribe(
            data => response = data,
            err => {
                console.log("Ocurrio un error al llamar el servicio");
            },
            ()=>{
                this.listado_tareas = response;
                console.log(this.listado_tareas);
            }//hola
        );
    }

    get_tareas_realizadas(){
        var response: any[];
        let idusuario: string;
        idusuario = this.idusuario2;
        this.Tareas.email_usuario = idusuario;
        
        this.service.get_tareas_realizadas(this.Tareas.email_usuario).subscribe(
            data => response = data,
            err => {
                console.log("Ocurrio un error al llamar el servicio");
            },
            ()=>{
                this.listado_tareas_realizadas = response;
                console.log(this.listado_tareas_realizadas);
            }
        );
    }
    get_idusuario(){
        let idusuario1 = this.activatedRouter.snapshot.params.email;
        console.log(idusuario1);
        this.idusuario2 = idusuario1;
    }

    insertarTarea(){ //se llama del html
        var response;
        this.Tareas.email_usuario = this.idusuario2;
        this.service.insertarTarea(this.Tareas).subscribe( 
            data => response = data,
                err => {
                console.log("ERROR");
                },
                ()=> {
                    this.Tareas = {
                        id_tarea: "",
                        titulo: "",
                        descripcion:"",
                        estado:"",
                        email_usuario:""
                    }
                    this.get_tareas();

                }

            
        )
    }

    eliminar_tarea(id_tarea){
        var response;
        var load={
          id_tarea:id_tarea
        }
        this.service.eliminar_tarea(load).subscribe(
            data => response = data,
            err => {
                console.log("Ocurrio un error al llamar el servicio");
            },
            ()=>{
                this.Tareas = {
                    id_tarea: "",
                    titulo: "",
                    descripcion:"",
                    estado:"",
                    email_usuario:""
                }
                this.get_tareas();
                this.get_tareas_realizadas();                     
            }
                   
        );
    }


    pasarDatosTarea(tarea){
        this.Tareas={
                id_tarea:tarea.id_tarea,
                titulo:tarea.titulo,
                descripcion:tarea.descripcion,
                estado:tarea.estado,
                email_usuario:tarea.email_usuario
        }
    }

    actualizar_tarea(){
        var response;
        this.service.actualizar_tarea(this.Tareas).subscribe(
            data => response = data,
            err => {
                console.log("Ocurrio un error al llamar el servicio");
            },
            ()=>{
                   this.get_tareas();
                   this.get_tareas_realizadas();
            }
        )

    }


    
}