import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModalConfirmComponent } from '../components/modals/modal-confirm/modal-confirm.component';

@Injectable()
export class ModalService {

    constructor(
        public dialog: MatDialog
      ) { }

    openDialogConfirm(config): void {

        const dialogRef = this.dialog.open(ModalConfirmComponent, {
          width: config.hasOwnProperty('width') ? config.width : '400px',
          data: {
              msg: config.msg,
              title: config.title,
              btn_confirm_text: config.hasOwnProperty('btn_confirm_text') ? config.btn_confirm_text : 'Aceptar',
              btn_cancel_text: config.hasOwnProperty('btn_cancel_text') ? config.btn_cancel_text : '',
              btn_class: config.hasOwnProperty('btn_class') ? config.btn_class : 'justify-center'
            }
        });

        dialogRef.afterClosed().subscribe(res => {
          if (res) {
              if (config.hasOwnProperty('callback')) {
                if (config.callback) {
                    config.callback();
                  }
              }
          }
        });
    }

}
