import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public router: Router, public http: Http) { }
  
  signIn(username, password){
     var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        let body = 'username='+username+'&amp;password='+password;
        this.http.post('/signin', body, {headers: headers})
            .subscribe(
                response => {
                    console.info(response);
                    //localStorage.setItem('id_token',response.json().id_token);
                    //this.router.navigate(['home']);
                },
                error => {
                    console.error(error);
                }
            );
  }
  ngOnInit() {
  }

}
