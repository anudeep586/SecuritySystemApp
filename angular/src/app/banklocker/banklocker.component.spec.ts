import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanklockerComponent } from './banklocker.component';

describe('BanklockerComponent', () => {
  let component: BanklockerComponent;
  let fixture: ComponentFixture<BanklockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanklockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanklockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
