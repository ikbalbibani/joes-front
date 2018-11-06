import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GestionService} from '../gestion.service';


@Component({
  selector: 'app-gestion' ,
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {


users$: object ;

  constructor(private  router: Router , private  service: GestionService) {}

  ngOnInit() {
    this.service.getUsers() .subscribe(
      service  => this.users$ = service
    );
  }

  /*filterCondition(user) {
    return user.cin.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1 ;
  }*/
}
