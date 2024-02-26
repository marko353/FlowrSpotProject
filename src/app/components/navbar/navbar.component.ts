import { Component, EventEmitter, Output } from '@angular/core';
import { AccountFormService } from '../../account-form.service';

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() showFormEvent = new EventEmitter<boolean>();


  constructor(private accountFormService : AccountFormService ) { }
  showCreateAccountForm() {
    console.log("Clicked on New Account button");
    this.accountFormService.setShowCreateAccount(true);
  }
}
