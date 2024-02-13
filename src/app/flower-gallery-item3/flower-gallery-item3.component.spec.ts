import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerGalleryItem3Component } from './flower-gallery-item3.component';

describe('FlowerGalleryItem3Component', () => {
  let component: FlowerGalleryItem3Component;
  let fixture: ComponentFixture<FlowerGalleryItem3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerGalleryItem3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowerGalleryItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
