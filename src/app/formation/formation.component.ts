import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/model/formation.model';
import { FormationService } from '../services/formation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

  formation: Formation[]=[];
  // submitted: boolean=false;
  // errorMsg!: string;


  constructor(private service:FormationService) {

  }
  ngOnInit(): void {
    this.getAllFormations();
  }

  getAllFormations(): void {
    this.service.getAllFormations().subscribe(
      formation => this.formation = formation
    );
  }

  // delete(mat:Matiere): void {
  //   this.matiere = this.matiere.filter(m => m !== mat);
  //   this.service.deleteMatiere(mat.id).subscribe();
  // }

  // add(nom: string): void {
  //   nom = nom.trim();
  //   if (!nom) { return; }
  //   this.service.addMatiere({ nom } as Matiere)
  //     .subscribe(mat => {
  //       this.matiere.push(mat);
  //     });
  //   this.refreshPage()
  // }

  refreshPage(){
    window.location.reload();
  }

}
