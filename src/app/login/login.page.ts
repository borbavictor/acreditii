import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private form: FormGroup;

  constructor(
    public angularFire: AngularFireAuth,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  login() {

    this.signInWithEmail(this.form.value)
      .then((res) => {
        console.log("res", res)

        const user = {
          uid: res.uid,
          email: res.email,
        }
        // this.storage.setItem('actualUser', JSON.stringify(user));
        this.router.navigate(['/tabs']);
      })
      .catch((error) => {
        console.log("error", error);
        // this.storage.setItem('actualUser', null);
      })
  }

  signInWithEmail({ email, password }): Promise<any> {
    return this.angularFire.signInWithEmailAndPassword(email, password);
  }

}
