import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../search.service';

import {Observable, Subject } from 'rxjs';
import{ debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators'
import { Phrase } from '../phraseInterface';

@Component({
  selector: 'app-search-module',
  templateUrl: './search-module.component.html',
  styleUrls: ['./search-module.component.sass']
})
export class SearchModuleComponent implements OnInit {

  
  phrases$!: Observable<Phrase[]>;
  private searchPhrase = new Subject<string>();

  constructor(private searchService: SearchService) { }

  search(word: string): void{
    this.searchPhrase.next(word);
  }

  searchInGoogle(choosenPhrase: string): void{
    if(choosenPhrase.trim().length > 0 ) window.open(`https://www.google.com/search?q=${choosenPhrase}`);
  }

  ngOnInit(): void {

    this.phrases$ = this.searchPhrase.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((word: string) => this.searchService.findPhrases(word))
    )
  }

  

}
