import { Component } from '@angular/core';
import { ICompany } from '../models/company.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  showCompanys: boolean = true;
  companyList: Array<ICompany> = [
    {
      id: '430t8h30vg8u34h0vuh3v',
      name: 'Nestle',
      date: new Date(),
      place: {
        country: 'Brasil',
        state: 'São Paulo',
        city: 'Marília'
      },
      link: 'https://www.nestle.com.br/',
      registerPeriod: {
        begin: new Date(),
        end: new Date(),
      },
      status: 'ACTIVE',
    },
    {
      id: '094hg0v38hv38rhv03rhujrhpfiv',
      name: 'Jacto',
      date: new Date(),
      place: {
        country: 'Brasil',
        state: 'São Paulo',
        city: 'Pompeia'
      },
      link: 'https://jacto.com/brasil',
      registerPeriod: {
        begin: new Date(),
        end: new Date(),
      },
      status: 'ACTIVE',
    }
  ];
  constructor() { }

}
