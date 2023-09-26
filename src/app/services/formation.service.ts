import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, catchError, of } from 'rxjs';
import { MATIERES } from 'src/data/MATIERES';
import { Matiere } from 'src/model/matiere.model';
import { MessageService } from './message.service';
import { Formation } from 'src/model/formation.model';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  url = "http://localhost:8080/formations";
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  constructor(private http: HttpClient, private messageService: MessageService) {}

  public getAllFormations(): Observable<Formation[]> {
    return this.http.get<Formation[]>(this.url)
    .pipe(
      tap(_=>this.log('fetched formations')),
      catchError(this.handleError<Matiere[]>('getFormations',[]))
    )
  }



  public getById(id:number): Observable<Formation>{
    const url = `${this.url}/${id}`;
    return this.http.get<Formation>(url)
    .pipe(
      tap(_=>this.log(`fetched formation id =${id}`)),
      catchError(this.handleError<Formation>(`get formation id =${id}`))
    );
  }

  // public addMatiere(matiere:Matiere): Observable<Matiere> {
  //       return this.http.post<Matiere>(this.url, matiere, this.httpOptions).pipe(
  //     tap((newMatiere: Matiere) => this.log(`added participant w/ id=${newMatiere.id}`)),
  //     catchError(this.handleError<Matiere>('addMatiere'))
  //   );

  // }

  // public deleteMatiere(id:number): Observable<Matiere> {
  //   const url=`${this.url}/${id}`;
  //   return this.http.delete<Matiere>(url, this.httpOptions).pipe(
  //     tap(_ => this.log(`deleted matiere id=${id}`)),
  //     catchError(this.handleError<Matiere>('deleteMatiere'))
  //   );
  // }


  private log(message: string) {
    this.messageService.add(`MatiereService: ${message}`);
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
