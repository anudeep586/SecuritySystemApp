import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbanklockerComponent } from './viewbanklocker.component';

describe('ViewbanklockerComponent', () => {
  let component: ViewbanklockerComponent;
  let fixture: ComponentFixture<ViewbanklockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbanklockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbanklockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
