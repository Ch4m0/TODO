import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';
import { EditPage } from '../edit/edit';
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
   ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
 

  //ir a vista de crear
  goAdd(){

       this.navCtrl.push(AddPage);
  }

  edit(id){

    this.navCtrl.push(EditPage, { id:id, name:'abner' } );

  }

  delete(id){
    console.log(id);
    this.tareasServicioProvider.deleteTareas(id)
    .then(
      data => {
        console.log(data);

        if(data){

          this.tareasServicioProvider.getTareas()
          .then(res => {
            this.tareas = res;
            console.log(res);
          });

        }

      }
      )

  }

}
