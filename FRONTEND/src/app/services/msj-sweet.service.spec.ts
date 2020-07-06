import { TestBed } from '@angular/core/testing';

import { MsjSweetService } from './msj-sweet.service';

describe('MsjSweetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MsjSweetService = TestBed.get(MsjSweetService);
    expect(service).toBeTruthy();
  });
});
