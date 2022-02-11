import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishBasicsComponent } from './english-basics.component';

describe('EnglishBasicsComponent', () => {
  let component: EnglishBasicsComponent;
  let fixture: ComponentFixture<EnglishBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishBasicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
