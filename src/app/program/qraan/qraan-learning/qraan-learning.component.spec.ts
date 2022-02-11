import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QraanLearningComponent } from './qraan-learning.component';

describe('QraanLearningComponent', () => {
  let component: QraanLearningComponent;
  let fixture: ComponentFixture<QraanLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QraanLearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QraanLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
