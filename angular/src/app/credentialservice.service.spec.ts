import { TestBed } from '@angular/core/testing';

import { CredentialserviceService } from './credentialservice.service';

describe('CredentialserviceService', () => {
  let service: CredentialserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CredentialserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
