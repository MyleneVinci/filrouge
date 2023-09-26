import { Component, OnInit } from '@angular/core';
import { Matiere } from 'src/model/matiere.model';
import { MatiereService } from '../services/matiere.service';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit{

  matiere: Matiere[]=[];


  constructor(private service:MatiereService) {

  }
  ngOnInit(): void {
    this.getAllMatieres();
  }

  getAllMatieres(): void {
    this.service.getAllMatieres().subscribe(
      matiere => this.matiere = matiere
    );
  }

  delete(mat:Matiere): void {
    this.matiere = this.matiere.filter(m => m !== mat);
    this.service.deleteMatiere(mat.id).subscribe();
  }

  add(nom: string): void {
    nom = nom.trim();
    if (!nom) { return; }
    this.service.addMatiere({ nom } as Matiere)
      .subscribe(mat => {
        this.matiere.push(mat);
      });
    this.refreshPage()
  }

  refreshPage(){
    window.location.reload();
  }
}
