import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentiallistComponent } from './credentiallist.component';

describe('CredentiallistComponent', () => {
  let component: CredentiallistComponent;
  let fixture: ComponentFixture<CredentiallistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentiallistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentiallistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
