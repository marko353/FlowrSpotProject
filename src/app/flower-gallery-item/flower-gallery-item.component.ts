import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Flower } from '../flower';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-flower-gallery-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './flower-gallery-item.component.html',
  styleUrl: './flower-gallery-item.component.scss'
})
export class FlowerGalleryItemComponent {

  @Input() flower!: Flower;

}
