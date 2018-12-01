import { Component, Inject } from '@angular/core';
import { 
	MatDialogRef, MAT_DIALOG_DATA 
} from '@angular/material'; 

@Component({
  selector: 'app-confirmar-remover-dialog',
  templateUrl: './confirmar-remover-dialog.component.html',
  styleUrls: ['./confirmar-remover-dialog.component.css']
})
export class ConfirmarRemoverDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<ConfirmarRemoverDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any) { }

  enviar() {
  	this.dialogRef.close({ perguntaId: this.data.perguntaId });
  }

  fecharDialog() {
  	this.dialogRef.close();
  }

}
