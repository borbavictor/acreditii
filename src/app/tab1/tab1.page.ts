import { Component } from '@angular/core';
import { ICompany } from '../models/company.model';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  showCompanys: boolean = true;
  list = [];
  // companyList: Array<ICompany> = [
  //   {
  //     id: '430t8h30vg8u34h0vuh3v',
  //     name: 'Nestle',
  //     date: new Date(),
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
  constructor(private firestoreService: FirestoreService) {
    this.loadCounters()
  }

  loadCounters() {
    this.firestoreService.listAllCounters().subscribe(res =>{
      this.list = res.docs.map(doc => doc.data());
      console.log("list",this.list)
    })
  }

}
