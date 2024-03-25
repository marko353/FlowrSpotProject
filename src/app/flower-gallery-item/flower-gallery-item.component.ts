import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Flower } from '../flower';
import { AuthService } from '../auth.service'; // Dodajte AuthService
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flower-gallery-item',
  templateUrl: './flower-gallery-item.component.html',
  styleUrls: ['./flower-gallery-item.component.scss'],
  imports: [CommonModule, FormsModule],
  standalone:true
  
})
export class FlowerGalleryItemComponent {

  @Input() flower!: Flower;

  constructor(private router: Router) { } 

  viewFlowerDetails(flowerId: number) {
    this.router.navigate(['/flower', flowerId]);
  }
}
