import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorListComponent } from './visitor-list.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSolutionRoutingModule } from './visitor-list-routing.module';
import { VisitorComponent } from './visitor/visitor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ListSolutionRoutingModule,

  ],
  declarations: [VisitorListComponent, VisitorComponent]
})
export class VisitorListModule { }
