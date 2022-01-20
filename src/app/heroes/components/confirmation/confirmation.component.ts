import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ConfirmationComponent>, @Inject(MAT_DIALOG_DATA) public data: Heroe) { }

  ngOnInit(): void {
  }

  delete()
  {
    this.dialogRef.close(true);
  }

  close()
  {
    this.dialogRef.close();
  }

}
