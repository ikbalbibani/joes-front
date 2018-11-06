import { Component, OnInit } from '@angular/core';
import {GestionService} from '../gestion.service';
import {Router, RouterModule} from '@angular/router';




@Component({
  selector: 'app-ajouter-emp',
  templateUrl: './ajouter-emp.component.html',
  styleUrls: ['./ajouter-emp.component.css']
})
export class AjouterEmpComponent implements OnInit {
constructor(private serviceG: GestionService, private router: Router) { }

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

  this.serviceG.addEmp(this.employe).subscribe(result =>{
    this.router.navigateByUrl('admin/gestion');
  });

}

ngOnInit() {
  }


}
