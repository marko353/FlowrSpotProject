import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowerDetailChildComponent } from './flower-detail-child.component';

describe('FlowerDetailChildComponent', () => {
  let component: FlowerDetailChildComponent;
  let fixture: ComponentFixture<FlowerDetailChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlowerDetailChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlowerDetailChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
