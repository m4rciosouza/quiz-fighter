import { TestBed } from '@angular/core/testing';

import { AnimacaoService } from './animacao.service';

describe('AnimacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnimacaoService = TestBed.get(AnimacaoService);
    expect(service).toBeTruthy();
  });
});
