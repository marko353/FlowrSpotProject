import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' },
  { path: 'register', component: CreateAccountFormComponent },
  { path: 'login',component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 


