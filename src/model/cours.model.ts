import { Formation } from "./formation.model";
import { Matiere } from "./matiere.model";


export interface Cours {

    id:number;
    nom:string;
    matiere:Matiere;
    formation:Formation;
    duree:number;


}