import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public userInfo: any = {}
  public showInfo: Boolean = false

  private userForm: FormGroup;
  uid = "RtnbeXYABKS28NdJwuBll8UEHLQ2"
  user;

  constructor(
    private router: Router,
    private firestoreService: FirestoreService,
    private formBuilder: FormBuilder,
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
      console.log(this.user)
    })
  }

  update() {
    console.log("user", this.userForm.value)
    this.firestoreService.updateUser(this.userForm.value)
  }

  logoff() {
    this.router.navigate(['/login'])
  }

}
