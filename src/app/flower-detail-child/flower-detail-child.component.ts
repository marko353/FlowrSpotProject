import { Component, Input } from '@angular/core';
import { Flower } from '../flower';
import { FLOWERS } from '../mock-flowers';

@Component({
  selector: 'app-flower-detail-child',
  standalone: true,
  imports: [],
  templateUrl: './flower-detail-child.component.html',
  styleUrl: './flower-detail-child.component.scss'
})
export class FlowerDetailChildComponent {
  @Input() flower: Flower | undefined; 
}

