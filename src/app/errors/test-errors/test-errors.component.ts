import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'gs-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = environment.apiUrl + "buggy";
  validationErrors: string[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get400Error() {
    this.http.get(this.baseUrl + "/badrequest").subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  get401Error() {
    this.http.get(this.baseUrl + "/test").subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  get404Error() {
    this.http.get(this.baseUrl + "/notfound").subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  getValidationError() {
    this.http.get(this.baseUrl + "/servererror").subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }

  get500Error() {
    this.http.post(environment.apiUrl + "users/register", {}).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error
    })
  }

}
