import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-module',
  templateUrl: './search-module.component.html',
  styleUrls: ['./search-module.component.sass']
})
export class SearchModuleComponent implements OnInit {

  searchBar = new FormControl('');

  constructor() { }

  ngOnInit(): void {

    console.log(this.searchBar.valueChanges.subscribe({
      next: getVal => console.log(getVal)
    }))

  }

  

}
