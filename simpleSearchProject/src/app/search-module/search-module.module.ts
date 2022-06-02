import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchModuleRoutingModule } from './search-module-routing.module';
import { SearchModuleComponent } from './search-module.component';


@NgModule({
  declarations: [
    SearchModuleComponent
  ],
  imports: [
    CommonModule,
    SearchModuleRoutingModule
  ]
})
export class SearchModuleModule { }
