import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbanklockerComponent } from './editbanklocker.component';

describe('EditbanklockerComponent', () => {
  let component: EditbanklockerComponent;
  let fixture: ComponentFixture<EditbanklockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditbanklockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbanklockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
