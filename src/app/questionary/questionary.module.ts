import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { QuestionaryAlertComponent, QuestionaryPage } from './questionary.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionaryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [QuestionaryPage, QuestionaryAlertComponent]
})
export class QuestionaryPageModule { }
