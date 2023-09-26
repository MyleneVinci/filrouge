import { Component, OnInit } from '@angular/core';
import { FORMATIONS } from 'src/data/FORMATIONS';
import { MATIERES } from 'src/data/MATIERES';
import { Matiere } from 'src/model/matiere.model';
import { CoursService } from '../services/cours.service';
import { Formation } from 'src/model/formation.model';
import { Cours } from 'src/model/cours.model';
import { Formateur } from 'src/model/formateur.model';



@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  cours: Cours[] =[];

  constructor(private service:CoursService) {} //injection de dépendances

  ngOnInit(): void {
    this.getAllCours();
  }

  getAllCours(): void {
    this.service.getAllCours().subscribe(
      cours => this.cours = cours  );

  }


  deleteCours(id: number){
    this.service.deleteCours(id)
    .subscribe(this.getAllCours);
    this.refreshPage();
  }



  refreshPage(){
    window.location.reload();
  }

}
