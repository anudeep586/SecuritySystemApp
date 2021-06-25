import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcredentialComponent } from './editcredential.component';

describe('EditcredentialComponent', () => {
  let component: EditcredentialComponent;
  let fixture: ComponentFixture<EditcredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcredentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
