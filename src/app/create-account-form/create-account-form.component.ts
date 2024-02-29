import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-account-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-account-form.component.html',
  styleUrl: './create-account-form.component.scss'
})
export class CreateAccountFormComponent implements OnInit {

formData = {

  username: '',
  email: '',
  password: ''

};
onSubmit(){
  console.log('Novi nalog', this.formData)
}



  ngOnInit(): void {
  
  }
 


  




}




