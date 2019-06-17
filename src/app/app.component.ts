import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../../src/app/model/usuario.model';
import { ServiciosExternosService } from './../../src/app/services/servicios-externos.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
constructor(private usuarioModel: UsuarioModel, private service: ServiciosExternosService){}
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
      this.usuarioModel = response.usuario;
      console.log('buscarUSuario - usuarioModel: ',this.usuarioModel);
      console.log('buscarUSuario - usuarioModel avatar: ',this.usuarioModel.avatar_url);
    }, (responseError)=>{
      console.log('buscarUSuario - responseERROR: ',responseError);
      //this.router.navigateByUrl(['show_alunos']);
    });
    console.log('buscarUSuario - end');
  }
}