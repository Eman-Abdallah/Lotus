import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QraanComponent } from './qraan.component';

describe('QraanComponent', () => {
  let component: QraanComponent;
  let fixture: ComponentFixture<QraanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QraanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QraanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
