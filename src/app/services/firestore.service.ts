import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore'
import { ChatData } from '../providers/chatData';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  chat: any;
  user: any;
  chatSubscription: any;
  constructor(
    private fireStore: AngularFirestore,
    private authFire: AngularFireAuth,
    private chatData: ChatData,
    private router: Router
  ) {

  }

  getIdToken() {
    return this.authFire.credential;
  }

  getUID() {
    return 'RtnbeXYABKS28NdJwuBll8UEHLQ2';
    // const user = await this.authFire.currentUser;
    // return user.uid;
  }

  listAllCounters() {
    return this.fireStore.collection<any>('counters').get();
  }

  getAsyncUserFields(): any {
    console.log("🚀 ~ file: firestore.service.ts ~ line 56 ~ FirestoreService ~ getAsyncUserFields ~ getUID", this.getUID())
    return this.fireStore.collection('users').doc(this.getUID()).valueChanges();
  }

  getChatMessages(chatName: string): any {
    return this.fireStore.collection('chats').doc(chatName).valueChanges();
  }
  getChatById(chatId: string): any {
    return this.fireStore.collection('chats').doc(chatId).valueChanges();
  }
  addUserToChat(chatId: string) {
    let chatDocRef = this.fireStore.collection('chats').doc(chatId);
    chatDocRef.update({ users: firebase.default.firestore.FieldValue.arrayUnion(this.getUID()) });
    this.chatSubscription.unsubscribe();
    this.router.navigate(['private-chat']);
  }

  enterOnGroupChat(chatId: string, company: any) {
    this.getUserInfo().subscribe(res => {
      this.user = {
        data: res.data(),
        id: res.id,
      };

      // this.chatSubscription = this.getChatById(chatId);
      this.chatData.chat = this.getChatById(chatId);

      this.chatSubscription = this.getChatById(chatId).subscribe(chat => {
        if (chat) {
          this.chatData.chatId = chatId;
          this.chatData.user = this.user;

          if (this.user.data.chats.filter(it => it == chatId).length == 0) {
            let userChatRef = this.fireStore.collection("users").doc(this.user.id);
            userChatRef.update({ chats: firebase.default.firestore.FieldValue.arrayUnion(chatId) })
          }
          this.addUserToChat(chatId);
        }
        else {
          this.chatData.chatId = chatId;
          this.chatData.user = this.user;
          const data = { data: 'enter-room', type: 'enter-room' };
          // create new chat document
          let docRef = this.fireStore.collection("chats").doc(chatId);
          docRef.set({
            counter: company.id,
            counterName: company.company,
            date: new Date(),
            messages: [],
            users: [],
          }).then(it => {
            let doc = this.fireStore.collection("users").doc(this.user.id);
            doc.update({ chats: firebase.default.firestore.FieldValue.arrayUnion(chatId) }).then(el => {
              // send join message
              // this.sendMessage({ id: this.user.id, name: this.user.name, }, chatId, data);
              this.addUserToChat(chatId);
            });
          });
        }
      });
    });
  }

  exitGroup(chatId: string) {
    const myId = this.getUID();
    this.fireStore.collection('chats').doc(chatId).update({ users: firebase.default.firestore.FieldValue.arrayRemove(myId) });
    this.fireStore.collection("users").doc(myId).update({ chats: firebase.default.firestore.FieldValue.arrayRemove(chatId) });
  }

  getUserInfo(userId?) {
    return this.fireStore.collection('users').doc(userId ? userId : this.getUID()).get()
  }
  updateUser(userData) {
    this.fireStore.collection('users').doc(this.getUID()).update(Object.assign({}, userData)).then(it => it);
  }

  sendMessage(user: any, chatId: any, data: any, payload?: any) {
    data.user = user.id;
    data.userName = user.data.name ? user.data.name : "";
    data.timestamp = firebase.default.firestore.Timestamp.now();
    let docRef = this.fireStore.collection("chats").doc(chatId);
    docRef.update({ messages: firebase.default.firestore.FieldValue.arrayUnion(data) })
  }
}
