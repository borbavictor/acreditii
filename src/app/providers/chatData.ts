import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatData {

  public chatId: any;
  public chat: any;
  public user: any;
  public privateChatUser: any;

  public constructor() { }
}