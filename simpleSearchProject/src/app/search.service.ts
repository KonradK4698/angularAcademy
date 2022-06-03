import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders } from '@angular/common/http'

interface Phrase {
  phrase: string;
}

@Injectable({
  providedIn: 'root'
})

export class SearchService {

  private searchPath = '/api/phrases'

  constructor(private http: HttpClient) { }
  
  findPhrases(): Observable<Phrase[]>{
    return this.http.get<Phrase[]>(this.searchPath);
  }
}
