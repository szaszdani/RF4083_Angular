import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LoginGuardGuard} from './login-guard.guard';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
