import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { app_routing } from './app.routes'
import { HttpClientModule } from '@angular/common/http';
import { UsuarioModel } from '../../src/app/model/usuario.model';
import { AppComponent } from './app.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    NotFoundComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,app_routing
  ],
  providers: [UsuarioModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
