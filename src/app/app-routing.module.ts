import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './cours/cours.component';
import { MatiereComponent } from './matiere/matiere.component';
import { FormationComponent } from './formation/formation.component';
import { CoursDetailsComponent } from './cours-details/cours-details.component';
import { CoursFormComponent } from './cours-form/cours-form.component';


const routes: Routes = [
  {path:"formations", component:FormationComponent},
  {path:"cours/details/:id", component:CoursDetailsComponent},
  {path:"cours/enregistrement", component:CoursFormComponent},
  {path:"cours", component:CoursComponent},
  {path:"matieres", component:MatiereComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }