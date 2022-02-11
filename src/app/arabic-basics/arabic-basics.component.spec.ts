import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicBasicsComponent } from './arabic-basics.component';

describe('ArabicBasicsComponent', () => {
  let component: ArabicBasicsComponent;
  let fixture: ComponentFixture<ArabicBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArabicBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabicBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
