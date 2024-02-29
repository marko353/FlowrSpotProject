import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FlowergalleryComponent } from './flowergallery/flowergallery.component';

export const routes: Routes = [
  { path: '', component: NavbarComponent, children: [
    { path: '', component: SearchbarComponent },
    { path: '', component: FlowergalleryComponent }
  ]},
  { path: 'register', component: CreateAccountFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 


