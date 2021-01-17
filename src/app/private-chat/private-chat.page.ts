import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { ProfilePopoverComponent } from '../profile-popover/profile-popover';
import { ChatData } from '../providers/chatData';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-private-chat',
  templateUrl: 'private-chat.page.html',
  styleUrls: ['private-chat.page.scss']
})
export class PrivateChatPage {
  messages = [];
  user = { id: 'RtnbeXYABKS28NdJwuBll8UEHLQ2' };
  msgInput: string = "";
  mobHeight: any;
  mobWidth: any;
  company: any;
  chat: any;
  users_loaded: any = []
  public userInfo: any = {}
  public showInfo: Boolean = false
  constructor(
    private chatData: ChatData,
    private firestoreService: FirestoreService,
    public modalCtrl: ModalController,
    public popoverController: PopoverController,
    private router: Router,
  ) {
    this.mobHeight = (window.screen.height) + "px";
    this.mobWidth = (window.screen.width) + "px";
    this.firestoreService.getChatById(this.chatData.chatId).subscribe(chat => {
      console.log("🚀 ~ file: private-chat.page.ts ~ line 34 ~ PrivateChatPage ~ this.firestoreService.getChatById ~ chat", chat)
      this.chat = {
        data: chat,
        id: this.chatData.chatId,
        user: this.chatData.user,
      };
    })
  }

  sendMessage() {
    let sendData = { data: null, type: null };
    let msg = this.msgInput;

    sendData = { data: msg, type: 'text' }
    if (sendData.data.length > 0) {
      this.firestoreService.sendMessage(this.chatData.user, this.chat.id, sendData, this.chat);
      this.msgInput = '';
    }
  }

  createAutoScroll() {
    let observer = new MutationObserver(function (mutationRecords, observer) {
      let obj = (<HTMLDivElement>document.getElementById('chatcontainer'));
      obj.scrollTop = obj.scrollHeight;
      let obj2 = (<HTMLDivElement>document.getElementById('chatlist'));
      obj2.scrollTop = obj2.scrollHeight;
    });
    var target = document.getElementById("chatlist");
    var config = {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    };
    observer.observe(target, config);
  }

  scrollToBottom() {
    let obj2 = (<HTMLDivElement>document.getElementById('chatlist'));
    obj2.scrollTop = obj2.scrollHeight;
  }

  sameDay(d1, d2) {
    if (d1 !== undefined && d2 !== undefined) {
      const date1 = new Date(d1.timestamp.seconds * 1000);
      const date2 = new Date(d2.timestamp.seconds * 1000);
      if (date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth())
        return (date1.getDay() === date2.getDay())
      else if (date1.getFullYear() === 12 && date2.getFullYear() === 1 &&
        date1.getMonth() === 12 && date2.getMonth() === 1 &&
        date1.getDay() === 31 && date2.getDay() === 1) {
        return false
      }
      return false;
    }
    return true;
  }

  async openUserInfo(event, message) {
    this.popoverController.create({
      component: ProfilePopoverComponent,
      event: event,
      componentProps: { username: message.userName, uid: message.user }
    }).then(popover => popover.present())

  }

  gotoChats() {
    this.router.navigate(['/tabs/tab2'])
  }
}
