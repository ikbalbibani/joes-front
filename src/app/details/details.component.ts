import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GestionService} from '../gestion.service';



@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  user$: object ;
  constructor( private  data: GestionService, private  router: ActivatedRoute  ) {
    this.router.params.subscribe(params => this.user$ = params.id);
  }
  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data
    );
  }

}
