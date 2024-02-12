import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowergalleryComponent } from './flowergallery.component';

describe('FlowergalleryComponent', () => {
  let component: FlowergalleryComponent;
  let fixture: ComponentFixture<FlowergalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowergalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowergalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
