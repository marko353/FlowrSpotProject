import { Component } from '@angular/core';
import { FlowerGalleryItemComponent } from '../flower-gallery-item/flower-gallery-item.component';
import { FlowerGalleryItem3Component } from '../flower-gallery-item3/flower-gallery-item3.component';


@Component({
  selector: 'app-flowergallery',
  standalone: true,
  imports: [FlowerGalleryItemComponent, FlowerGalleryItem3Component],
  templateUrl: './flowergallery.component.html',
  styleUrl: './flowergallery.component.scss'
})
export class FlowergalleryComponent {

}
