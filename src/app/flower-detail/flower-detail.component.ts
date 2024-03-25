import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flower } from '../flower';
import { FLOWERS } from '../mock-flowers'; // Dodajte ovaj uvoz
import { AuthService } from '../auth.service'; // Uvoz servisa za autentifikaciju
import { FlowerDetailChildComponent } from '../flower-detail-child/flower-detail-child.component';

@Component({
  selector: 'app-flower-detail',
  templateUrl: './flower-detail.component.html',
  styleUrls: ['./flower-detail.component.scss'],
  imports:[FlowerDetailChildComponent],
  standalone: true
})
export class FlowerDetailComponent implements OnInit {
  flower: Flower | undefined;
  bigImageUrl: string = 'assets/images/big-placeholder.jpg'; // Fiksni URL velike slike
  smallImageUrl: string | undefined;
  isLoggedIn: boolean = false; // Dodajte promenljivu za praćenje stanja prijave

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService // Dodajte servis za autentifikaciju
  ) { }

  ngOnInit(): void {
    // Dobavljanje ID-ja cveta iz URL parametra
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      // Pozivamo metod za pronalaženje biljke na osnovu ID-ja
      this.findFlowerById(id);
      // Ažuriramo URL male slike kada se učita stranica
      this.updateSmallImage();
    });

    // Provera da li je korisnik prijavljen kada se komponenta inicijalizuje
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  // Metod za pronalaženje biljke na osnovu ID-ja
  findFlowerById(id: number): void {
    this.flower = FLOWERS.find((flower) => flower.id === id);
  }

  // Metod za ažuriranje URL-a male slike
  updateSmallImage(): void {
    if (this.flower) {
      // Ažurirajte URL male slike na osnovu URL-a odgovarajućeg cveta
      this.smallImageUrl = this.flower.profile_picture;
    }
  }
}






