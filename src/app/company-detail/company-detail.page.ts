import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { v4 as uuidv4 } from 'uuid';
import { QuestionaryAlertComponent, QuestionaryPage } from '../questionary/questionary.page';
import { QueuePage } from '../queue/queue.page';
import { FirestoreService } from '../services/firestore.service';


@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.page.html',
  styleUrls: ['./company-detail.page.scss'],
})
export class CompanyDetailPage implements OnInit {
  @Input() company: any;
  answers: any = {};

  constructor(
    private modalController: ModalController,
    private popoverController: PopoverController,
    private firestoreService: FirestoreService,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  async openAlertQuestions() {
    const modal = await this.popoverController.create({
      component: QuestionaryAlertComponent,
      componentProps: { company: this.company },
      showBackdrop: true,
      backdropDismiss: true,
    });
    modal.onDidDismiss()
      .then((data) => {
        if (data.data.valid) {
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
      .then((data) => {
        if (data.data.valid) {
          this.saveQuestions(data.data.answers);
        }
      });
    return await modal.present();
  }
  async saveQuestions(answers) {
    console.log("🚀 ~ file: company-detail.page.ts ~ line 69 ~ CompanyDetailPage ~ saveQuestions ~ answers", answers)
    const modal = await this.popoverController.create({
      component: QueuePage,
      componentProps: { company: this.company },
      showBackdrop: true,
      backdropDismiss: true,
    });
    modal.onDidDismiss()
      .then((data) => {
        if (data.data.valid) {
          this.modalController.dismiss();
          this.firestoreService.enterOnGroupChat(uuidv4(), this.company);
          // this.router.navigate(['/private-chat']);
        }
      });
    return await modal.present();
  }
}
