import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../../../src/app/model/usuario.model';
import { ServiciosExternosService } from './../../../../src/app/services/servicios-externos.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private usuarioModel: UsuarioModel, private service: ServiciosExternosService, private routerPage: Router){

  }

  title = 'desafioGutHubFront';
  userName = '';

  ngOnInit(){
    console.log('Usuario es : '+this.userName);
    this.usuarioModel = new UsuarioModel();
  }

  buscarUSuario(){
    console.log('Usuario es : '+this.userName);

    this.service.makeGetRequest('desafio','buscarUsuario',this.userName).subscribe((response)=>{
      console.log('buscarUSuario - response: ',response);
      console.log('buscarUSuario - codigo: ',response.codigo);
      if(response.codigo == "200"){
        this.usuarioModel = response.usuario;
      console.log('buscarUSuario - usuarioModel: ',this.usuarioModel);
      console.log('buscarUSuario - usuarioModel avatar: ',this.usuarioModel.avatar_url);
      this.routerPage.navigate(['perfil', this.usuarioModel]);//  'perfil',[this.userName]=this.usuarioModel);
      }else{
        console.log('buscarUSuario - distinto de 200: ',response.codigo);
        this.routerPage.navigateByUrl('notfound');
      }      
    }, (responseError)=>{
      console.log('buscarUSuario - responseERROR: ',responseError);
      this.routerPage.navigateByUrl('notfound');
    });
    console.log('buscarUSuario - end');
  }

}
