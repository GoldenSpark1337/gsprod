import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IUser } from 'src/app/shared/models/user';
import { DialogCreateMessageComponent } from '../dialog-create-message/dialog-create-message.component';

@Component({
  selector: 'gs-button-create-message',
  templateUrl: './button-create-message.component.html',
  styleUrls: ['./button-create-message.component.css']
})
export class ButtonCreateMessageComponent implements OnInit {
  @Input() user: IUser;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openMessageDialog() {
    const dialogRef = this.dialog.open(DialogCreateMessageComponent, {
      scrollStrategy: new NoopScrollStrategy(),
      data: {
        user: this.user
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      });
  }
}
