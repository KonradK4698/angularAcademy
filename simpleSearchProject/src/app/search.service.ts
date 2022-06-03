import { Injectable } from '@angular/core';
import { Observable, tap, of, catchError } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http'
import { Phrase } from './phraseInterface';

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  private searchPath = '/api/phrases'

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  
  findPhrases(word: string): Observable<Phrase[]>{
    if (!word.trim()) {
      return of([]);
    }
    return this.http.get<Phrase[]>(`${this.searchPath}/?phrase=${word}`).pipe(
      tap(phrase => phrase.length ? console.log("Matching phrases found") : console.log("No matching phrases")),
      catchError(this.handleError<Phrase[]>('searchPhrase', []))
    );
  }
}
