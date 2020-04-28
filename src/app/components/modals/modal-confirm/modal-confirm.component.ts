import { Inject, Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface modalData {
  msg: string;
  title: string;
  btn_class: string;
  btn_confirm_text: string;
  btn_cancel_text: string;
}

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.less']
})

export class ModalConfirmComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: modalData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
