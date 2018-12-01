import { TestBed } from '@angular/core/testing';

import { Jogador2StrategyService } from './jogador2-strategy.service';

describe('Jogador2StrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Jogador2StrategyService = TestBed.get(Jogador2StrategyService);
    expect(service).toBeTruthy();
  });
});
