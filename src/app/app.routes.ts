import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const app_routes: Routes = [
    { path: 'index' , component: BuscarComponent },
    { path: 'perfil' , component: PerfilComponent },
    { path: 'notfound' , component: NotFoundComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'index'}
];

export const app_routing = RouterModule.forRoot(app_routes);