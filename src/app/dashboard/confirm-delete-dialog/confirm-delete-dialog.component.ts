import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

interface ConfirmDeleteDialogData {
  name: string;
  message?: string;
}

@Component({
  selector: 'avr-confirm-delete-dialog',
  templateUrl: './confirm-delete-dialog.component.html',
  styleUrls: ['./confirm-delete-dialog.component.css']
})
export class ConfirmDeleteDialog implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmDeleteDialogData) {
  }

  ngOnInit() {
  }

}
