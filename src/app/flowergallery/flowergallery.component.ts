import { Component } from '@angular/core';

import { FlowerListComponent } from '../flower-list/flower-list.component';

@Component({
  selector: 'app-flowergallery',
  standalone: true,
  imports: [FlowerListComponent],
  templateUrl: './flowergallery.component.html',
  styleUrl: './flowergallery.component.scss'
})
export class FlowergalleryComponent {

}
