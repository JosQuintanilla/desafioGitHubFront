import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../../../src/app/model/usuario.model';
import { RepositoriosModel } from '../../../../src/app/model/repositorios.model';
import { ServiciosExternosService } from './../../../../src/app/services/servicios-externos.service'; 

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  constructor(public usuarioModel: UsuarioModel, private service: ServiciosExternosService, private repositoriosModel: RepositoriosModel) {    
   }
  
  ngOnInit() {
    console.log('PerfilComponent - init');
    this.usuarioModel = JSON.parse(localStorage.getItem('usuarioModel'));
    console.log('PerfilComponent - usuarioModel: ',this.usuarioModel);
    console.log('PerfilComponent - usuarioModel login: ',this.usuarioModel.login);
    //buscarRepos
    this.service.makeGetRequest('desafio','buscarRepos',this.usuarioModel.login).subscribe((response)=>{
      console.log('PerfilComponent - buscarRepos response: ',response);
      if(response.codigo == "200"){
        console.log('PerfilComponent - 200: ');
        this.repositoriosModel = response.listaRepositorios;
        console.log('PerfilComponent - this.repositoriosModel: ',this.repositoriosModel);
      }else{
        console.log('PerfilComponent - distinto de 200: ',response.codigo);
      }      
    }, (responseError)=>{
      console.log('PerfilComponent - responseERROR: ',responseError);
    });
  }

}