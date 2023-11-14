import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-insert-dialog',
  templateUrl: './insert-dialog.component.html',
  styleUrls: ['./insert-dialog.component.css']
})
export class InsertDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<InsertDialogComponent>) {}

  ngOnInit(): void {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onInsertClick(): void {
    // Perform insert action here, send data to the API
    // You can access the input values and send them to your API
    // For example, access the input values using a ViewChild and make an API call
    // Then close the dialog when the insert action is complete
  }
}
