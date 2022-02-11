import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishConvarsationComponent } from './english-convarsation.component';

describe('EnglishConvarsationComponent', () => {
  let component: EnglishConvarsationComponent;
  let fixture: ComponentFixture<EnglishConvarsationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishConvarsationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishConvarsationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
