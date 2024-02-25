
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flower } from './flower';
import { FLOWERS } from './mock-flowers';

@Injectable({
  providedIn: 'root'
})
export class FlowerService {

  constructor() { }

  getFlowers(): Observable<Flower[]> {
    return of(FLOWERS);
  }
}
