import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' },
  { path: 'register', component: CreateAccountFormComponent },
  { path: 'login',component: LoginFormComponent},
  { path: 'user-details', component: UserDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 


