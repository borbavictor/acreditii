import { ModalController, PopoverController } from '@ionic/angular';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICompany } from 'src/app/models/company.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss'],
})
export class QueuePage implements OnInit {
  @Input() company: ICompany;
  npeople: number = 5;
  aborted: boolean = false;
  constructor(
    private router: Router,
    private popoverController: PopoverController,
  ) {
  }

  ngOnInit() {
    console.log("🚀 ~ file: company-detail.page.ts ~ line 48 ~ QuestionaryPage ~ ngOnInit ~ ngOnInit", this.company)
    // while (this.npeople > 0) {
    this.verifyPeople();
  }

  verifyPeople() {
    if (!this.aborted) {
      setTimeout((d) => {
        console.log("🚀 ~ file: queue.page.ts ~ line 23 ~ QueuePage ~ setTimeout ~ ", this.npeople)
        if (this.npeople == 0) {
          this.router.navigate(['/private-chat']);
          this.popoverController.dismiss({ valid: true });
        } else {
          this.npeople -= 1;
          this.verifyPeople();
        }
      }, 1000);
    }
  }

  abort() {
    this.aborted = true;
    this.popoverController.dismiss();
  }
}
