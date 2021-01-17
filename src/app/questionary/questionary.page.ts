import { ModalController, PopoverController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { ICompany } from 'src/app/models/company.model';
import { QueuePage } from '../queue/queue.page';

@Component({
  selector: 'my-questiony-alert-component',
  template: `
  <ion-content overflow-scroll="false">
    <ion-row class="message-text">
      <ion-col size="12">
        <ion-label>existem algumas questões que precisam ser respondidas para que você possa ingressar neste balcão</ion-label>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col size="12">
        <ion-button expand="full" shape="round" (click)="openQuestions()">Responder questões</ion-button>
      </ion-col>
    </ion-row>
  </ion-content>
  `,
  styles: ['ion-content {--ion-background-color: #FFFFFF;}', '.message-text {margin: 2vh; text-align: center;}']
})
export class QuestionaryAlertComponent {
  @Input() company: ICompany;
  constructor(
    private popoverController: PopoverController,
  ) {
  }
  async openQuestions() {
    this.popoverController.dismiss({ valid: true });
  }
}

@Component({
  selector: 'app-questionary',
  templateUrl: './questionary.page.html',
  styleUrls: ['./questionary.page.scss'],
})
export class QuestionaryPage implements OnInit {
  @Input() company: ICompany;

  constructor(
    private popoverController: PopoverController,
  ) {
  }

  ngOnInit() {
    console.log("🚀 ~ file: company-detail.page.ts ~ line 48 ~ QuestionaryPage ~ ngOnInit ~ ngOnInit", this.company)
  }

  async saveQuestions() {
    this.popoverController.dismiss({ valid: true });
  }
}
