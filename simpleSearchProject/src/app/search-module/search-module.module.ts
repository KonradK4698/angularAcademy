import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchModuleRoutingModule } from './search-module-routing.module';
import { SearchModuleComponent } from './search-module.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchModuleComponent
  ],
  imports: [
    CommonModule,
    SearchModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SearchModuleModule { }
