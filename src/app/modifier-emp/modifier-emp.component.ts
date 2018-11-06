import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';
import {GestionService} from '../gestion.service';

@Component({
  selector: 'app-modifier-emp',
  templateUrl: './modifier-emp.component.html',
  styleUrls: ['./modifier-emp.component.css']
})
export class ModifierEmpComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private service: GestionService, private router: Router) { }
  employ;
  employe = {
    'nom': null,
    'prenom': null,
    'cin': null,
    'login': null,
    'mdp': null,
    'dateNaiss': null,
    'tel': null,
    'adresse': null,
    'salaire': null
  };

  onSubmit(e){
    e.preventDefault();
    this.employe.nom = e.target.querySelector('#nom').value;
    this.employe.prenom = e.target.querySelector('#pr').value;
    this.employe.cin = e.target.querySelector('#cin').value;
    this.employe.login = e.target.querySelector('#login').value;
    this.employe.dateNaiss = e.target.querySelector('#daten').value;
    this.employe.tel = e.target.querySelector('#tel').value;
    this.employe.adresse = e.target.querySelector('#adr').value;
    this.employe.salaire = e.target.querySelector('#salaire').value;
    this.employe.mdp = e.target.querySelector('#mdp').value;

    this.service.updateEmp(this.actRoute.snapshot.params.id, this.employe).subscribe(result => {
      this.router.navigateByUrl('admin/gestion');
    });

  }

  ngOnInit() {
    this.service.getUser(this.actRoute.snapshot.params.id).subscribe(res =>{
      this.employ = res;
    } );


  }

}
