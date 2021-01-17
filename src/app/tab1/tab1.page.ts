import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CompanyDetailPage } from '../company-detail/company-detail.page';
import { ICompany } from '../models/company.model';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showCompanys: boolean = true;
  // companyList: Array<ICompany> = [
  //   {
  //     id: '430t8h30vg8u34h0vuh3v',
  //     name: 'Nestle',
  //     date: new Date(),
  //     banner: 'venha fazer parte desse time!',
  //     mentor: 'João da Silva',
  //     position: 'RH Supervisor',
  //     place: {
  //       country: 'Brasil',
  //       state: 'São Paulo',
  //       city: 'Marília'
  //     },
  //     link: 'https://www.nestle.com.br/',
  //     registerPeriod: {
  //       begin: new Date(),
  //       end: new Date(),
  //     },
  //     status: 'ACTIVE',
  //   },
  //   {
  //     id: '094hg0v38hv38rhv03rhujrhpfiv',
  //     name: 'Jacto',
  //     date: new Date(),
  //     banner: 'vamos crescer juntos!',
  //     mentor: 'Marcos José',
  //     position: 'RH',
  //     place: {
  //       country: 'Brasil',
  //       state: 'São Paulo',
  //       city: 'Pompeia'
  //     },
  //     link: 'https://jacto.com/brasil',
  //     registerPeriod: {
  //       begin: new Date(),
  //       end: new Date(),
  //     },
  //     status: 'ACTIVE',
  //   }
  // ];
  companyList: Array<any> = [];
  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    public modalController: ModalController,
  ) {
    this.loadCounters()
  }

  async goToCompany(company) {
    const modal = await this.modalController.create({
      component: CompanyDetailPage,
      componentProps: { company }
    });
    return await modal.present();
  }

  loadCounters() {
    this.firestoreService.listAllCounters().subscribe(res => {
      this.companyList = res.docs.map(doc => doc.data());
      console.log("list", this.companyList)
    })
  }
}
