import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirmar-restauracao-dialog',
  templateUrl: './confirmar-restauracao-dialog.component.html',
  styleUrls: ['./confirmar-restauracao-dialog.component.css']
})
export class ConfirmarRestauracaoDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<ConfirmarRestauracaoDialogComponent>) {}

  fecharDialog(resposta: boolean) {
  	this.dialogRef.close(resposta);
  }

}
