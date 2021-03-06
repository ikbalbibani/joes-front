import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  checkUser(email, pass) {
    return this.http.post('http://localhost:444/Employes/auth', {
      'login': email,
      'mdp' : pass
    });
  }
}
