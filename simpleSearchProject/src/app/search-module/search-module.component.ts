import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-module',
  templateUrl: './search-module.component.html',
  styleUrls: ['./search-module.component.sass']
})
export class SearchModuleComponent implements OnInit {

  searchBar = new FormControl('');

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {

    this.searchBar.valueChanges.subscribe({
      next: (word)=>{
        this.searchService.findPhrases().subscribe({
          next: (phrases) => {console.log(phrases)},
          complete: ()=>{console.log("gotowe")}
        })
      }
    })

  }

  

}
