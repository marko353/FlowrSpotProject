import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../flower.service';
import { Flower } from '../flower'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flower-list',
  templateUrl: './flower-list.component.html',
  styleUrls: ['./flower-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class FlowerListComponent implements OnInit {
  flowers: Flower[] = []; 
  flowerRows: Flower[][] = []; // Dodajte definiciju flowerRows

  constructor(private flowerService: FlowerService) {}

  ngOnInit(): void {
    this.getFlowers();
  }
  getFlowers(): void {
    this.flowerService.getFlowers()
      .subscribe(flowers => {
        this.flowers = flowers;
        this.arrangeFlowers();
      });
  }
  arrangeFlowers(): void {
    this.flowerRows = [];
    for (let i = 0; i < this.flowers.length; i += 4) {
      this.flowerRows.push(this.flowers.slice(i, i + 4));
    }
  }
}

