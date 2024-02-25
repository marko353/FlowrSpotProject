import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerGalleryItemComponent } from './flower-gallery-item.component';

describe('FlowerGalleryItemComponent', () => {
  let component: FlowerGalleryItemComponent;
  let fixture: ComponentFixture<FlowerGalleryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerGalleryItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowerGalleryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
