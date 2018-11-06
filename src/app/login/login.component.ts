import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = '';
  pass = '';
  user;
  test = '';
  constructor( private router: Router, private service: AuthService) { }

  onLog(e) {
    e.preventDefault();
    // recuperation input
    this.login = e.target.querySelector('#inputEmail').value;
    this.pass = e.target.querySelector('#inputPassword').value;
    this.service.checkUser(this.login, this.pass).subscribe( result => {
      this.user = result;
     if (this.user != null) {
         this.router.navigateByUrl('admin');
         localStorage.setItem('isLoggedIn', 'true');
         localStorage.setItem('cin', this.user.cin);
     }
    });

  }

  ngOnInit() {
  }

}
