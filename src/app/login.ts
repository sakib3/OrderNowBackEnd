import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'login',
  templateUrl: './login.html',
  //styles: [ styles ]
})

export class Login {
    constructor(public router: Router, public http: Http) {
    }

    login(username, password) {
        let body = JSON.stringify({ username, password });
        this.http.post('', body, {})
            .subscribe(
                response => {
                    localStorage.setItem('id_token',response.json().id_token);
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
