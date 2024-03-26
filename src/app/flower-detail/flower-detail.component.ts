import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flower } from '../flower';
import { FLOWERS } from '../mock-flowers';
import { AuthService } from '../auth.service';
import { FlowerDetailChildComponent } from '../flower-detail-child/flower-detail-child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flower-detail',
  templateUrl: './flower-detail.component.html',
  styleUrls: ['./flower-detail.component.scss'],
  imports: [FlowerDetailChildComponent, CommonModule],
  standalone: true
})
export class FlowerDetailComponent implements OnInit {
  flower: Flower | undefined;
  bigImageUrl: string = 'assets/images/big-placeholder.jpg';
  smallImageUrl: string | undefined;
  isLoggedIn: boolean = false;
  isHomePage: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));

      this.findFlowerById(id);
      this.updateSmallImage();
    });
    this.isLoggedIn = this.authService.isLoggedIn();
  }
  findFlowerById(id: number): void {
    this.flower = FLOWERS.find((flower) => flower.id === id);
  }
  updateSmallImage(): void {
    if (this.flower) {

      this.smallImageUrl = this.flower.profile_picture;
    }
  }
}






