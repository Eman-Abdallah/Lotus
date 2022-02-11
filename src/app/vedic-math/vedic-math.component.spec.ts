import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedicMathComponent } from './vedic-math.component';

describe('VedicMathComponent', () => {
  let component: VedicMathComponent;
  let fixture: ComponentFixture<VedicMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VedicMathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VedicMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
