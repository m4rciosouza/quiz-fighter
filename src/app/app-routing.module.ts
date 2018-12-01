import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
	LoginComponent, PreJogoComponent, AdminComponent, JogoComponent
} from './components';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'pre-jogo', component: PreJogoComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'jogo/:id', component: JogoComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
			