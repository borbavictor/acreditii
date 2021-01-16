import { ActionSheetController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ICompany } from 'src/app/models/company.model';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.page.html',
  styleUrls: ['./company-detail.page.scss'],
})
export class CompanyDetailPage implements OnInit {

  company: ICompany = {
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
  };
  browser: any;
  message: String = ''
  appUrl = 'https://play.google.com/store/apps'

  translations: Map<any, any> = new Map();

  constructor(
    private router: Router,
    private iab: InAppBrowser,
    private socialSharing: SocialSharing,
  ) {
  }

  ngOnInit() {
  }

  openWebPage(link: string) {
    this.browser = this.iab.create(link, '_blank');
  }

  async presentActionSheet() {
    this.socialSharing.share('Participe dessa entrevista!', 'Entrevista', null, this.appUrl);
  }

}
