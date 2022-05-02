import { Component, Inject, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/shared/services/account.service';
import { environment } from 'src/environments/environment';
import XHRUpload from '@uppy/xhr-upload';
import Uppy from '@uppy/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'gs-upload-button-matdialog-content',
  templateUrl: './upload-button-matdialog-content.component.html',
  styleUrls: ['./upload-button-matdialog-content.component.css']
})
export class UploadButtonMatdialogContentComponent implements OnInit {
  baseUrl = environment.apiUrl;
  user: IUser;
  
  uppy: Uppy;

  hasBasDropzoneOver = false;

  constructor(private accountService: AccountService, private snackBar: MatSnackBar,
    private matDialog: MatDialogRef<UploadButtonMatdialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.initializeUploader();
    console.log(this.data.url)
    console.log(this.uppy)
  }


  initializeUploader() {
    this.uppy = new Uppy({ 
      debug: true, 
      autoProceed: true,
      restrictions: {
        maxFileSize: this.data.maxFileSize, // only 10 mb at cloudinary - image and audio/video is 100 mb
        maxNumberOfFiles: 1
      }
      })
    .use(XHRUpload, { 
      endpoint: this.data.url, 
      formData: true,
      headers: {'Authorization': `Bearer ${this.user.token}`},
      
      ...this.data.method ? {method: this.data.method}: {method: 'POST'}, 
      ...this.data.metafield ? {fieldName: ''} : {}})
    .on('upload-success', (res) => {
      this.openSnackBar("Uploaded successfully")
      this.matDialog.close({data: res.data});
    })
    .on('error', (res) => this.openSnackBar("Failed uploading files"));
  }

  openSnackBar(message: string) {
    var options = new MatSnackBarConfig();
    options.duration = 8000;
    this.snackBar.open(message, "OK", options)
  }
}
