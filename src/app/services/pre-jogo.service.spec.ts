import { TestBed } from '@angular/core/testing';

import { PreJogoService } from './pre-jogo.service';

describe('PreJogoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreJogoService = TestBed.get(PreJogoService);
    expect(service).toBeTruthy();
  });
});
