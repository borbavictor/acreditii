import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ICompany } from 'src/app/models/company.model';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss'],
})
export class QueuePage implements OnInit {
  @Input() company: ICompany;
  npeople: number = 3;
  npercent: number = 0;
  aborted: boolean = false;
  constructor(
    private popoverController: PopoverController,
  ) {
  }

  ngOnInit() {
    this.verifyPeople();
  }

  verifyPeople() {
    if (!this.aborted) {
      this.npercent = 1 - (this.npeople > 99 ? this.npeople / 100 : this.npeople / 10);
      setTimeout((d) => {
        if (this.npeople == 0) {
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
    this.popoverController.dismiss({ valid: false });
  }
}
