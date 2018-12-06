import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TareasServicioProvider } from '../../providers/tareas-servicio/tareas-servicio';
//tarea
import { Tarea } from '../../models/tarea';
import { HomePage } from '../home/home';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})

export class AddPage {

	public tarea:Tarea;
	public categoria: any;

	constructor(public navCtrl: NavController, 
		public navParams: NavParams,
		public tareasServicioProvider: TareasServicioProvider) {

		this.tarea = new Tarea();
		this.categoria = [ 'categoria1','categoria2', 'categoria3' ];
		
	}
	

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddPage');
	}

	save(){

		console.log(this.tarea);

		this.tareasServicioProvider.addTareas(this.tarea).then(data => {

			if(data){

       				this.navCtrl.push(HomePage);
			}




		});

	}

}
