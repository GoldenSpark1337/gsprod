import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileUploader } from 'ng2-file-upload';
import { take } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/shared/services/account.service';
import { environment } from 'src/environments/environment';
import { UploadButtonMatdialogContentComponent } from '../upload-button-matdialog-content/upload-button-matdialog-content.component';

@Component({
  selector: 'gs-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.css']
})
export class UploadButtonComponent implements OnInit {

  constructor(private accountService: AccountService, public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  

  openUploadDialog() {
    const dialogRef = this.dialog.open(UploadButtonMatdialogContentComponent, {panelClass: "upload-button-dialog"});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
