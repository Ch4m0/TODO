import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

}
