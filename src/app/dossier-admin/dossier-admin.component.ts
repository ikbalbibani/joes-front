import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GestionService} from '../gestion.service';

@Component({
  selector: 'app-dossier-admin',
  templateUrl: './dossier-admin.component.html',
  styleUrls: ['./dossier-admin.component.css']
})
export class DossierAdminComponent implements OnInit {
  constructor(private  router: Router , private  service: GestionService) { }
  dossier$: object ;
  ngOnInit() {
    this.service.getDossier() .subscribe(
      service  => this.dossier$ = service
    );
  }

}
