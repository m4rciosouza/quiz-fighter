import { TestBed } from '@angular/core/testing';

import { JogoService } from './jogo.service';

describe('JogoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JogoService = TestBed.get(JogoService);
    expect(service).toBeTruthy();
  });
});
