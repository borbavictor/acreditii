import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ICompany } from '../models/company.model';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  loadingChats: boolean = true;
  chatDocs: any;
  chatList: Array<any> = [];
  chats: Array<any> = [];
  constructor(
    private firestoreService: FirestoreService,
    private alertController: AlertController,
  ) {
    this.loadChatList();
  }
  loadChatList() {
    this.loadingChats = true;
    this.chatDocs = this.firestoreService.getAsyncUserFields().subscribe(it => {
      console.log("🚀 ~ file: tab2.page.ts ~ line 25 ~ Tab2Page ~ this.chatDocs=this.firestoreService.getAsyncUserFields ~ it", it)
      this.chats = it.chats;
      this.chatList = [];
      this.loadChatMessages();
    });
  }

  loadChatMessages() {
    this.chats.forEach(it => {
      this.firestoreService.getChatMessages(it).subscribe(res => {
        if (res && (res.active == true || res.active == null))
          this.updateList(it, res);
        this.loadingChats = false;
      });
    });
  }

  updateList(id: any, res: any) {
    let index = this.chatList.findIndex(it => it.id === id);

    let data = {
      ...res
    };

    if (index >= 0) {
      this.chatList[index].data = data;
    }
    else
      this.chatList.push({ id: id, data: data });

    if (this.chatList.length > 1)
      this.sortList();

  }

  sortList() {
    let haveTimestamp = this.chatList.filter(it => it.data.messages.length > 0 && it.data.messages[it.data.messages.length - 1].timestamp).reverse();
    let dontHaveTimestamp = this.chatList.filter(it => !(it.data.messages.length > 0 && it.data.messages[it.data.messages.length - 1].timestamp));
    haveTimestamp = haveTimestamp.sort((a, b) => new Date(a.data.messages[a.data.messages.length - 1].timestamp.seconds) >= new Date(b.data.messages[b.data.messages.length - 1].timestamp.seconds) ? 1 : -1);
    haveTimestamp = haveTimestamp.reverse().concat(dontHaveTimestamp);
    this.chatList = haveTimestamp;
  }

  viewChat(chat: any) {
    this.firestoreService.enterOnGroupChat(chat.id, null);
  }

  doExitGroup(chatId: string) {
    //remove from List
    const index = this.chatList.findIndex(it => it.id === chatId);
    index >= 0 ? this.chatList.splice(index, 1) : {};
    this.firestoreService.exitGroup(chatId);
    this.sortList();
  }
  async exitGroup(chat: any) {
    const alert = await this.alertController.create({
      header: `Deseja sair do chat "${chat.data.counterName}"?`,
      message: ``,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Sair',
          cssClass: 'alert-danger',
          handler: () => {
            this.doExitGroup(chat.id);
          }
        }
      ]
    });
    await alert.present();
  }
}
