import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const app_routes: Routes = [
    { path: 'index' , component: AppComponent },
    { path: 'perfil' , component: PerfilComponent },
    { path: 'notfound' , component: NotFoundComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'index'}
];

export const app_routing = RouterModule.forRoot(app_routes);