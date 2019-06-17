import { Component, OnInit } from '@angular/core';
import { ServiciosExternosService } from './../../src/app/services/servicios-externos.service'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
constructor(private service: ServiciosExternosService){}

  title = 'desafioGutHubFront';
  userName = '';

  ngOnInit(){
    console.log('Usuario es : '+this.userName);
  }

  buscarUSuario(){
    console.log('Usuario es : '+this.userName);

    this.service.makeGetRequest('desafio','buscarUsuario',this.userName).subscribe((response)=>{
      console.log('buscarUSuario - response: ',response);
    }, (responseError)=>{
      console.log('buscarUSuario - responseERROR: ',responseError);
    });
    console.log('buscarUSuario - end');
  }
}