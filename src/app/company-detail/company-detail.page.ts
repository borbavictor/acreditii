import { ModalController, PopoverController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { ICompany } from 'src/app/models/company.model';
import { QuestionaryAlertComponent, QuestionaryPage } from '../questionary/questionary.page';
import { QueuePage } from '../queue/queue.page';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.page.html',
  styleUrls: ['./company-detail.page.scss'],
})
export class CompanyDetailPage implements OnInit {
  @Input() company: any;

  constructor(
    public modalController: ModalController,
    public popoverController: PopoverController,
  ) {
  }

  ngOnInit() {
    console.log("🚀 ~ file: company-detail.page.ts ~ line 48 ~ CompanyDetailPage ~ ngOnInit ~ ngOnInit", this.company)
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async openAlertQuestions() {
    const modal = await this.popoverController.create({
      component: QuestionaryAlertComponent,
      componentProps: { company: this.company },
      showBackdrop: true,
      backdropDismiss: true,
    });
    modal.onDidDismiss()
      .then((valid) => {
        console.log("close alert")
        if (valid) {
          this.openQuestions();
        }
      });
    return await modal.present();
  }
  async openQuestions() {
    const modal = await this.popoverController.create({
      component: QuestionaryPage,
      componentProps: { company: this.company },
      showBackdrop: true,
      backdropDismiss: true,
    });
    modal.onDidDismiss()
      .then((valid) => {
        console.log("close questionary")
        if (valid) {
          this.saveQuestions();
        }
      });
    return await modal.present();
  }
  async saveQuestions() {
    const modal = await this.popoverController.create({
      component: QueuePage,
      componentProps: { company: this.company },
      showBackdrop: true,
      backdropDismiss: true,
    });
    modal.onDidDismiss()
      .then((valid) => {
        console.log("close queue")
        if (valid) {
          this.modalController.dismiss();
        }
      });
    return await modal.present();
  }
}
