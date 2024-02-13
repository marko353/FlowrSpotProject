import { Component } from '@angular/core';
import { FlowerGalleryItemComponent } from '../flower-gallery-item/flower-gallery-item.component';



@Component({
  selector: 'app-flowergallery',
  standalone: true,
  imports: [FlowerGalleryItemComponent],
  templateUrl: './flowergallery.component.html',
  styleUrl: './flowergallery.component.scss'
})
export class FlowergalleryComponent {

}
