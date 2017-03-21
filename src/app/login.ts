import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';


@Component({
  selector: 'login',
  templateUrl: './login.html',
  //styles: [ styles ]
})

export class Login {
    constructor(public router: Router, public http: Http) {
    }

    login(username, password) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        let body = 'username='+username+'&amp;password='+password;
        this.http.post('/login', body, {headers: headers})
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

    signup(event) {
        this.router.navigate(['signup']);
    }
}
