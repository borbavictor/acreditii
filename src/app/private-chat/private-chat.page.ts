import { Component } from '@angular/core';

@Component({
  selector: 'app-private-chat',
  templateUrl: 'private-chat.page.html',
  styleUrls: ['private-chat.page.scss']
})
export class PrivateChatPage {
  messages = [
    {
      timestamp: new Date(),
      data: 'olá, tudo bem?',
      user: 'vbv3345yvb345vyb4535vby4y35yvb345yvb345',
      type: 'text',
      userName: 'João',
    },
    {
      timestamp: new Date(),
      data: 'o que você gosta de fazer no seu tempo livre?',
      user: 'vbv3345yvb345vyb4535vby4y35yvb345yvb345',
      type: 'text',
      userName: 'João',
    }
  ];
  user = { id: '985y7tvn3945y7v938n4c435y97nc34y95' };
  msgInput: string = "";
  mobHeight: any;
  mobWidth: any;
  public userInfo: any = {}
  public showInfo: Boolean = false
  constructor() {
    this.mobHeight = (window.screen.height) + "px";
    this.mobWidth = (window.screen.width) + "px";
  }

  sendPrivateMessage() {
    console.log("🚀 ~ file: private-chat.page.ts ~ line 38 ~ PrivateChatPage ~ sendPrivateMessage ~ this.messages", this.messages)
    let msg = this.msgInput;
    if (msg.length > 0) {
      this.messages.push({
        timestamp: new Date(),
        data: msg,
        type: 'text',
        user: '985y7tvn3945y7v938n4c435y97nc34y95',
        userName: 'MeuNome',
      });
      this.msgInput = "";
    }
  }

  scrollToBottom() {
    let obj2 = (<HTMLDivElement>document.getElementById('chatlist'));
    obj2.scrollTop = obj2.scrollHeight;
  }

  sameDay(d1, d2) {
    if (d1 !== undefined && d2 !== undefined) {
      if (d1 != d2) {
        return false;
      }
    }
    return true;
  }
}
