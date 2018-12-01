import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarRestauracaoDialogComponent } from './confirmar-restauracao-dialog.component';

describe('ConfirmarRestauracaoDialogComponent', () => {
  let component: ConfirmarRestauracaoDialogComponent;
  let fixture: ComponentFixture<ConfirmarRestauracaoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarRestauracaoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarRestauracaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
