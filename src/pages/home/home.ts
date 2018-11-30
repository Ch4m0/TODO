import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { TareasServicioProvider } from '../../providers/tareas-servicio/tareas-servicio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	public tareas:any;

  constructor(public navCtrl: NavController, public tareasServicioProvider: TareasServicioProvider) {

  	this.tareasServicioProvider.getTareas()
    .then(data => {
      this.tareas = data;
      console.log(data);
    });

  	console.log(this.tareas)
  	console.log(this.tareas)
  	console.log(this.tareas)
  	console.log(this.tareas)

  }
  goAdd(){
    console.log("entro");
       this.navCtrl.push(AddPage);
  }

}
