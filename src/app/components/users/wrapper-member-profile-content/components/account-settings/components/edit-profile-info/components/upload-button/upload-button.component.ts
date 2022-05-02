import { NoopScrollStrategy } from '@angular/cdk/overlay';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from 'src/app/shared/services/account.service';
import { UploadButtonMatdialogContentComponent } from '../upload-button-matdialog-content/upload-button-matdialog-content.component';

@Component({
  selector: 'gs-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.css']
})
export class UploadButtonComponent implements OnInit {
  @Input() maxFileSize = 10 * 1024 * 1024;
  @Input() url = "";
  constructor(private accountService: AccountService, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openUploadDialog() {
    const dialogRef = this.dialog.open(UploadButtonMatdialogContentComponent, {
      scrollStrategy: new NoopScrollStrategy(),
      panelClass: "upload-button-dialog", 
      data: {
        maxfileSize: this.maxFileSize,
        url: this.url
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
