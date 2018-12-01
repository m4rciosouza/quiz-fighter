import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarRemoverDialogComponent } from './confirmar-remover-dialog.component';

describe('ConfirmarRemoverDialogComponent', () => {
  let component: ConfirmarRemoverDialogComponent;
  let fixture: ComponentFixture<ConfirmarRemoverDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmarRemoverDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmarRemoverDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
