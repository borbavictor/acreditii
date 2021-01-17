import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ICompany } from 'src/app/models/company.model';

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
        <ion-button expand="full" color="warning" shape="round" (click)="openQuestions()">Responder questões</ion-button>
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
  @ViewChild("target", { static: false }) target?: ElementRef;
  @ViewChild("hobby", { static: false }) hobby?: ElementRef;
  @ViewChild("dream", { static: false }) dream?: ElementRef;
  formValid: boolean = false;
  constructor(
    private popoverController: PopoverController,
  ) {
  }

  ngOnInit() {
  }

  answerVerify() {
    let target: string = this.target.nativeElement.value;
    let hobby: string = this.hobby.nativeElement.value;
    let dream: string = this.dream.nativeElement.value;
    (target.length > 0 && hobby.length > 0 && dream.length > 0) ? this.formValid = true : this.formValid = false;
  }

  saveQuestions() {
    let answers = {
      target: this.target.nativeElement.value,
      hobby: this.hobby.nativeElement.value,
      dream: this.dream.nativeElement.value
    }
    this.popoverController.dismiss({ valid: true, answers });
  }
}
