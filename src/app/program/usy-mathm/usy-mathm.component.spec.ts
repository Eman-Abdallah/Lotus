import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsyMathmComponent } from './usy-mathm.component';

describe('UsyMathmComponent', () => {
  let component: UsyMathmComponent;
  let fixture: ComponentFixture<UsyMathmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsyMathmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsyMathmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
