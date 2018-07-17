import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './../app.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userExist = false;
  userData = {
    name : 'hk',
    email : 'hk@mail.com',
    password : 'hk',
    cnfpassword : 'hk'
  }
  
  constructor(private myRoute: Router) { }

  ngOnInit() {
  }

  registerUser(userData) {
    console.log('userData >>',userData);
    this.myRoute.navigate(["login"]);
  }

}
