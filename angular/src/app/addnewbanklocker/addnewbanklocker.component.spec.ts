import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewbanklockerComponent } from './addnewbanklocker.component';

describe('AddnewbanklockerComponent', () => {
  let component: AddnewbanklockerComponent;
  let fixture: ComponentFixture<AddnewbanklockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewbanklockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewbanklockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
