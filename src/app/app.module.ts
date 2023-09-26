import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MatiereComponent } from './matiere/matiere.component';
import { CoursComponent } from './cours/cours.component';
import { FormationComponent } from './formation/formation.component';
import { FormateurComponent } from './formateur/formateur.component';

import { CoursDetailsComponent } from './cours-details/cours-details.component';
import { CoursFormComponent } from './cours-form/cours-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MatiereComponent,
    CoursComponent,
    FormationComponent,
    FormateurComponent,
    CoursDetailsComponent,
    CoursFormComponent,
 ],
  
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
