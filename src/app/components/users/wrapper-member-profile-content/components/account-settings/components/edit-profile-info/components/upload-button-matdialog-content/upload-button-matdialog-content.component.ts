import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from 'src/app/shared/services/account.service';
import { environment } from 'src/environments/environment';
import XHRUpload from '@uppy/xhr-upload';
import Uppy from '@uppy/core';

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

  constructor(private accountService: AccountService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit() {
    this.initializeUploader();
  }


  initializeUploader() {
    this.uppy = new Uppy({ 
      debug: true, 
      autoProceed: true,
      restrictions: {
        maxFileSize: 10 * 1014 * 1024,
        maxNumberOfFiles: 1
        }
      })
    .use(XHRUpload, { endpoint: environment.apiUrl + 'users/add-image' , method: 'POST', headers: {'Authorization': `Bearer ${this.user.token}`}})
    .on('upload-success', (res) => console.log(res));
  }

  // onUploadSuccess(elForUploadedFiles: any) {
  //   const url = response.uploadURL
  //   const fileName = file.name

  //   const li = document.createElement('li')
  //   const a = document.createElement('a')
  //   a.href = url
  //   a.target = '_blank'
  //   a.appendChild(document.createTextNode(fileName))
  //   li.appendChild(a)

  //   document.querySelector(elForUploadedFiles).appendChild(li)
  // }
}
