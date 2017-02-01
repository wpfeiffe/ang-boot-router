import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'hero',
    loadChildren: './hero-crud/hero-crud.module#HeroCrudModule'
  },
  {
    path: 'comp2',
    loadChildren: './comp2/comp2.module#Comp2Module'
  },
  {
    path: 'formplay',
    loadChildren: './form-play/form-play.module#FormPlayModule'
  },
  {
    path: 'login',
    loadChildren: './jwt-login/jwt-login.module#JwtLoginModule'
  },
  {
    path: 'primeng',
    loadChildren: './primeng-examples/primeng-examples.module/#PrimengExamplesModule'
  },
  {
    path: 'employees',
    loadChildren: './employee-grid/employee-grid.module#EmployeeGridModule'
  },
  {
    path: 'wscounter',
    loadChildren: './websocket-counter/websocket-counter.module#WebsocketCounterModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
