import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FlowergalleryComponent } from './flowergallery/flowergallery.component';
import { CommonModule } from '@angular/common';
import { CreateAccountFormComponent } from './create-account-form/create-account-form.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,SearchbarComponent,FlowergalleryComponent, CommonModule,CreateAccountFormComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showForm: boolean = true;
  
  constructor() {}


}