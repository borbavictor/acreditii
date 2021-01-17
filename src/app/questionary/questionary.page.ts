import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  private formQuestionary: FormGroup;
  constructor(
    private popoverController: PopoverController,
    private formBuilder: FormBuilder,
  ) {
    this.formQuestionary = this.formBuilder.group({
      target: ['', Validators.required],
      hobby: ['', Validators.required],
      dream: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  saveQuestions() {
    console.log("🚀 ~ file: questionary.page.ts ~ line 62 ~ QuestionaryPage ~ saveQuestions ~ this.formQuestionary.value", this.formQuestionary.value);
    this.popoverController.dismiss({ valid: true, answers: this.formQuestionary.value });
  }
}
