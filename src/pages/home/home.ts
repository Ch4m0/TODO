import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public tareas:any;

  constructor(public navCtrl: NavController) {

  	this.tareas = [
  	{
  		id: 1,
  		titulo: 'Tarea1',
  		descripcion:'Esto descripcion',
  		categoria:'categoria1',
  		fecha: '12/01/2019',
  		estado: 1
  	},
  	{
  		id: 2,
  		titulo: 'Tarea2',
  		descripcion:'Esto descripcion',
  		categoria:'categoria1',
  		fecha: '12/01/2019',
  		estado: 0
  	},
  	{
  		id:3,
  		titulo: 'Tarea3',
  		descripcion:'Esto descripcion',
  		categoria:'categoria1',
  		fecha: '12/01/2019',
  		estado: 1

  	},
  	{
  		id: 4,
  		titulo: 'Tarea4',
  		descripcion:'Esto descripcion',
  		categoria:'categoria1',
  		fecha: '12/01/2019',
  		estado: 1

  	}

  	];

  	console.log(this.tareas)
  	console.log(this.tareas)
  	console.log(this.tareas)
  	console.log(this.tareas)

  }

}
