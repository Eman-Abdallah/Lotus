import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabicFontComponent } from './arabic-font.component';

describe('ArabicFontComponent', () => {
  let component: ArabicFontComponent;
  let fixture: ComponentFixture<ArabicFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArabicFontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArabicFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
