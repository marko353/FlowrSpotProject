import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss'],
  standalone:true,
  imports:[ReactiveFormsModule, CommonModule]
})
export class CreateAccountFormComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: ['', Validators.required],
      agree: [false, Validators.requiredTrue] 
    });
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      console.log('Podaci za novi nalog:', this.registrationForm.value);
    } else {
      console.log('Forma nije validna, molimo popunite sva obavezna polja.');
    }
  }
}