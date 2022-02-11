import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsyMathComponent } from './usy-math.component';

describe('UsyMathComponent', () => {
  let component: UsyMathComponent;
  let fixture: ComponentFixture<UsyMathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsyMathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsyMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
