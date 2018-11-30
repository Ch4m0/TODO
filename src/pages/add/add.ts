import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Tarea } from '../../models/tarea';

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

	constructor(public navCtrl: NavController, public navParams: NavParams) {

		this.tarea = new Tarea();
		this.categoria = [ 'categoria1','categoria2', 'categoria3' ];
		
	}
	

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddPage');
	}
	save(){
		console.log(this.tarea);
	}

}
