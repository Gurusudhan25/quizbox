import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  templateUrl: './instructions-dialog.component.html',
  styleUrl: './instructions-dialog.component.scss'
})
export class InstructionDialogComponent {

  constructor (
    private dialogRef: MatDialogRef<InstructionDialogComponent>
  ) {}
}