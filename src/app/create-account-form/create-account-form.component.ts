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
  username: string = '';
  password: string = ''; // Definišemo model za password polje
  showForm: boolean = false;

  ngOnInit() {
    this.showCreateAccountForm(); // Prikazivanje forme pri inicijalizaciji komponente
  }

  showCreateAccountForm() {
    this.showForm = true;
  }

  createAccount() {
    console.log('Kreiranje naloga za korisnika:', this.username);
    console.log('Šifra:', this.password);
    // Resetovanje vrednosti polja nakon kreiranja naloga
    this.username = '';
    this.password = '';
  }
}




