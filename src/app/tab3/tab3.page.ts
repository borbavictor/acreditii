import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public userInfo: any = {}
  public showInfo: Boolean = false

  private userForm: FormGroup;
  avatarImage = 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png';
  user;

  constructor(
    private router: Router,
    private firestoreService: FirestoreService,
    private formBuilder: FormBuilder,
    private toastController: ToastController,
  ) {
    this.userForm = this.formBuilder.group({
      birthDate: [null],
      linkedin: [''],
      instagram: [''],
      facebook: [''],
      twitter: [''],
      bio: [''],
    });
  }

  ionViewWillEnter() {
    this.firestoreService.getUserInfo().subscribe(user => {
      this.user = user.data()
      this.userForm.patchValue(this.user)
      if (this.user && this.user.imgUrl && this.user.imgUrl.length)
        this.avatarImage = this.user.imgUrl
    })
  }

  update() {
    this.firestoreService.updateUser(this.userForm.value)
    this.presentToast()
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'As alterações foram salvas',
      duration: 3000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

  logoff() {
    this.router.navigate(['/login'])
  }

}
