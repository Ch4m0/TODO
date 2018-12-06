import { HttpClient } from '@angular/common/http';
import { Tarea } from '../../models/tarea';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

/*
  Generated class for the TareasServicioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TareasServicioProvider {
	apiUrl:string;

  constructor(public http: HttpClient) {
    console.log('Hello TareasServicioProvider Provider');
    this.apiUrl = 'http://api-tareas-super.herokuapp.com';
  }

  getTareas(){

  	return new Promise(resolve => {
  		
  		this.http.get(this.apiUrl+'/tareas').subscribe(data => {
  			resolve(data);
  		}, err => {
  			console.log(err);
  		});
  	});

  }

  getTarea(id){

    return new Promise( resolve => {
       this.http.get(this.apiUrl+'/tareas/'+id)
      // this.http.get(this.apiUrl+`/tareas/${id}`)
      .subscribe(
        data =>{

          resolve(data);

        },
        err => {

        })
    })
  }


  addTareas(tarea:any){

    // let options = new RequestOptions({ headers: headers });

    console.log(tarea, "tarea servicio");

    return new Promise (resolve => {
      this.http.post(this.apiUrl+'/tareas', tarea).subscribe(
        data => {resolve(data);
        }, 
        err =>   {

        })
  })

  }

  modifyTareas(id,tarea:any){

    // let options = new RequestOptions({ headers: headers });

    console.log(tarea, "tarea servicio");

    return new Promise (resolve => {
      this.http.put(this.apiUrl+'/tareas/'+id, tarea).subscribe(
        data => {resolve(data);
        }, 
        err =>   {

        })
    })

  }

  deleteTareas(id:any){

    return new Promise(resolve => {

      this.http.delete(this.apiUrl+'/tareas/'+id).subscribe(
        data => {
          resolve(data);
        },
        err => {

        }
        )

    })

  }
}
