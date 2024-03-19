import { Component } from '@angular/core';

import { FlowerGalleryItemComponent } from '../flower-gallery-item/flower-gallery-item.component';
import { FlowerService } from '../flower.service';
import { Observable } from 'rxjs';
import { Flower } from '../flower';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flowergallery',
  standalone: true,
  imports: [FlowerGalleryItemComponent, CommonModule],
  templateUrl: './flowergallery.component.html',
  styleUrl: './flowergallery.component.scss'
})
export class FlowergalleryComponent {
  currentPage: number = 1;

  changePage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }

  public flowers$: Observable<Flower[]> = this._flowerService.getFlowers();

  constructor(
    private _flowerService: FlowerService
  ) { }

}
