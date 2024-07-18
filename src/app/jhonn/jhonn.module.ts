import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPagesComponent } from './pages/main-pages.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { ListPersonComponent } from './components/list-person/list-person.component';



@NgModule({
  declarations: [
    MainPagesComponent,
    AddPersonComponent,
    ListPersonComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[MainPagesComponent]
})
export class JhonnModule { }
