import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerguntaFormDialogComponent } from './pergunta-form-dialog.component';

describe('PerguntaFormDialogComponent', () => {
  let component: PerguntaFormDialogComponent;
  let fixture: ComponentFixture<PerguntaFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerguntaFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerguntaFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
