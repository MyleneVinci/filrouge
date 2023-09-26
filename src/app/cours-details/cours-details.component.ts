
import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Cours } from "src/model/cours.model";
import { CoursService } from "../services/cours.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-cours-details',
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css'],
})
export class CoursDetailsComponent implements OnInit{

  cours!:Cours  ;

  constructor(private router: Router, private route:ActivatedRoute, private service:CoursService, private location: Location) {
  }

  ngOnInit(): void {
    this.getCoursDetails();
  }

  getCoursDetails(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getById(id)
      .subscribe(
        cours => this.cours = cours);
  }

  goBack(): void {
    this.location.back();
  }
  }


