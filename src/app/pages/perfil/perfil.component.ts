import { Component, OnInit, Input } from '@angular/core';
import { UsuarioModel } from '../../../../src/app/model/usuario.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @Input() usuarioModel: UsuarioModel;
  constructor() {
    console.log('PerfilComponent - init');
   }
  

  imagePath = "https://avatars1.githubusercontent.com/u/37678109?v=4";
  ngOnInit() {
    console.log('PerfilComponent - usuarioModel avatar: ',this.usuarioModel);
  }

}