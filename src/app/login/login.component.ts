import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { GetRidServiceService } from '../get-rid-service.service';
import { Login } from '../login';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  service = new GetRidServiceService();
  login: Login[] = [];
  constructor(private router: Router) {
    this.service.getLogin$().subscribe((login: Login[]) => {
      this.login = login;
    });
  }

  onInit() {
    this.service.getLogin$().subscribe((login: Login[]) => {
      this.login = login;
    });
  }
  
  check(f: NgForm) {
    this.onInit();
    const emailValue = f.controls['email'].value;
    const passwordValue = f.controls['password'].value;
    const filteredLogin = this.login.filter((t) => emailValue === t.email && passwordValue === t.password);
    if (filteredLogin.length > 0) {
      if (filteredLogin[0].role === 'user') {
        this.router.navigate(['/home']);
      } else if (filteredLogin[0].role === 'admin') {
        this.router.navigate(['/admin']);
      }
    } else {
      console.log(f);
    }
  }
}
