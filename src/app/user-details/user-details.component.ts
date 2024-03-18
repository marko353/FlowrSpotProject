import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '../auth.service';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']

 
})
export class UserDetailsComponent implements OnInit {
  user: User | null = null; 

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
   
 
  }

  logout() {
    this.authService.logout().subscribe(() => {
      if (!this.authService.isLoggedIn()) {
        this.router.navigate(['/']);
      }
    });
  }

}

