import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {AuthGuard} from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = '';
  pass = '';
  user;
  test= '';
  constructor( private router: Router, private service: AuthService, private guard: AuthGuard) { }

  onLog(e) {
    e.preventDefault();
    // recuperation input
    this.login = e.target.querySelector('#inputEmail').value;
    this.pass = e.target.querySelector('#inputPassword').value;
    this.service.checkUser(this.login, this.pass).subscribe( result => {
      this.user = result;
     if (this.user.found) {
         this.router.navigateByUrl('admin');
         localStorage.setItem('isLoggedIn', 'true');
         localStorage.setItem('nom', this.user.Employe.nom_e);
         localStorage.setItem('prenom', this.user.Employe.prenom_e);
         localStorage.setItem('cin', this.user.Employe.cin_e);
     }
    });

  }

  ngOnInit() {
  }

}
