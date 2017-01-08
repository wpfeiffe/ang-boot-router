/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JwtLoginService } from './jwt-login.service';

describe('JwtLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JwtLoginService]
    });
  });

  it('should ...', inject([JwtLoginService], (service: JwtLoginService) => {
    expect(service).toBeTruthy();
  }));
});
