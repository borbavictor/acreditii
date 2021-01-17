import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CompanyDetailPage } from './company-detail.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

const routes: Routes = [
  {
    path: '',
    component: CompanyDetailPage
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CompanyDetailPage]
})
export class CompanyDetailPageModule { }
