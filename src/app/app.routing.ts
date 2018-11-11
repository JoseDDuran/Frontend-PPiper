import { ModuleWithProviders } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';

const appRoutes: Routes = [
  {path : '', component: LoginComponent},
  {path : '', redirectTo : 'login' , pathMatch: 'full'},
  {path : 'login' , component : LoginComponent},
  {path : 'testv' , component : TestComponent},
  /*{path : 'book/:id' , component : BookComponent},
  {path : 'home' , component: HomeComponent}*/
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);