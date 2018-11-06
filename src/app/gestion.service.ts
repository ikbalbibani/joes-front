import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor( private http: HttpClient) {}
  getUsers(  ) {
    return this.http.get('http://localhost:444/Employes' );
  }
  getUser(userId) {
    return this.http.get('http://localhost:444/Employes/' + userId );
  }
  addEmp(body) {
    return this.http.post('http://localhost:444/Employes', body);
  }
  updateEmp(id, body){
    return this.http.put('http://localhost:444/Employes/' + id, body);
  }

  getDossier( ) {
    return this.http.get('http://localhost:444/Dossiers');
  }

}
