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
      email: ['yancorrea1995@gmail.com', [Validators.required, Validators.email]],
      password: ['senha123', Validators.required],
    });
  }

  ngOnInit() {
  }

  login() {

    this.signInWithEmail(this.form.value)
      .then((res) => {
        console.log("res", res)

        const user = {
          uid: "jebTQjN3KNYOMZYRnWd9QzjCwOA2",
          email: res.email,
        }

        this.router.navigate(['/tabs'], {
          queryParams: { user: JSON.stringify(user) }
        })
      })
      .catch((error) => {
        console.log("error", error)
      })
  }

  signInWithEmail({ email, password }): Promise<any> {
    return this.angularFire.signInWithEmailAndPassword(email, password);
  }

}
