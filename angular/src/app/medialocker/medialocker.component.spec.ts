import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedialockerComponent } from './medialocker.component';

describe('MedialockerComponent', () => {
  let component: MedialockerComponent;
  let fixture: ComponentFixture<MedialockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedialockerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedialockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
