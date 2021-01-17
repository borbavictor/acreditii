import { ModalController, PopoverController } from '@ionic/angular';

import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { Tab3Page } from '../tab3/tab3.page';



@Component({
    selector: 'profile-popover',
    templateUrl: 'profile-popover.html',
    styleUrls: ['profile-popover.scss']
})
export class ProfilePopoverComponent implements OnInit {
    @Input() user: any = {}
    @Input() uid: any = ''
    @Input() username: any
    showButtons: boolean = true
    defaul_image = '../../../assets/avatar.png'
    constructor(
        public popoverController: PopoverController,
        public modalController: ModalController,
        private firestoreService: FirestoreService,
    ) { }

    ngOnInit() {
        if (this.uid == this.firestoreService.getUID()) {
            this.showButtons = false
        }
        if (this.username) {
            this.firestoreService.getUserInfo(this.uid).subscribe(it => {
                this.user = it.data()
            })
        }
    }

    public closeModal() {
        this.popoverController.dismiss();
    }

    public closeModalPromise() {
        return this.popoverController.getTop();
    }

    openProfile() {
        this.modalController.create({
            component: Tab3Page,
            componentProps: { user: Object.assign(this.user, { userId: this.uid }) }
        }).then(function (modal) {
            return modal.present();
        });
    }

}