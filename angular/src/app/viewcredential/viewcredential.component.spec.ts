import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcredentialComponent } from './viewcredential.component';

describe('ViewcredentialComponent', () => {
  let component: ViewcredentialComponent;
  let fixture: ComponentFixture<ViewcredentialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcredentialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcredentialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
