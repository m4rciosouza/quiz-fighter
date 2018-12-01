import { TestBed } from '@angular/core/testing';

import { PerguntasService } from './perguntas.service';

describe('PerguntasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerguntasService = TestBed.get(PerguntasService);
    expect(service).toBeTruthy();
  });
});
