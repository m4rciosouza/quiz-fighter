import { TestBed } from '@angular/core/testing';

import { Jogador1StrategyService } from './jogador1-strategy.service';

describe('Jogador1StrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Jogador1StrategyService = TestBed.get(Jogador1StrategyService);
    expect(service).toBeTruthy();
  });
});
