import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public router: Router, public http: Http) { }
  signup(name, email, password) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    let body = 'name=' + name + '&amp;email=' + email + '&amp;password=' + password;
    this.http.post('/signup', body, { headers: headers })
      .subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
      );
  }
  ngOnInit() {
  }

}
