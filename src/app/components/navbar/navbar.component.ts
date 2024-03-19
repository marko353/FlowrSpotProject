import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports:[RouterLink, CommonModule]
})
export class NavbarComponent implements OnInit {
  get isAuthenticated() {
    return this.authService.isLoggedIn();
  };

  

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
   
   
  }

  logout() {
    // Odjava korisnika i redirekcija na login stranicu
    this.authService.logout().subscribe({
      next: () => this.router.navigate(['/'])
    });
  }
  handleImageClick() {
    // Koristite Router za preusmeravanje na stranicu sa detaljima korisnika
    this.router.navigate(['/user-details']);
  }
}

