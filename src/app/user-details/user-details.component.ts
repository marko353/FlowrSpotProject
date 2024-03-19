import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']


})
export class UserDetailsComponent {
  user: User | null = null;

  constructor(
    public authService: AuthService, private router: Router
  ) { 
    this.user = this.authService._user;
  }


  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}

