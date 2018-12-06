import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TareasServicioProvider } from '../../providers/tareas-servicio/tareas-servicio';

import { Tarea } from '../../models/tarea';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

	public id_tarea: any;
	public tarea:any;
	public categoria: any;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public tareasServicioProvider: TareasServicioProvider
  	) {

  	this.id_tarea = navParams.data;

	this.categoria = [ 'categoria1','categoria2', 'categoria3' ];

  	console.log(this.id_tarea);

  	this.tarea = new Tarea();

  	this.tareasServicioProvider.getTarea(this.id_tarea.id)

  	.then(data => {

  		// this.tarea.titulo = data.titulo
  		// this.tarea.descripcion = data.descripcion
  		// this.tarea.categoria = data.categoria
  		// this.tarea.fecha = "2018-12-06"
  		// this.tarea.id = data.id 
  		this.tarea = data;

  	})

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditPage');

  }

  modify(id){

  	this.tareasServicioProvider.modifyTareas(id, this.tarea).then(data => {

  		console.log(data);

  		if(data){ 

			this.navCtrl.push(HomePage);

  		}

  	})

  }

}
