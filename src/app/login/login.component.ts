import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers } from '@angular/http';
import { UserService } from '../user.service';
import * as io from "socket.io-client";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styles: ['@import https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css'],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  socket = io('http://localhost:3000');

  loginData = {
    email:'hk@mail.com',
    password:'HK@artoon'
  }
  errMsgExist = false;
  errMsg = ''
  constructor(private myRoute: Router,private userService: UserService,private http: Http) { }

  ngOnInit() {
    this.socket.on('OUC', function (data) {
      console.log("OUC >> ",data);
    });
  }

  checkUser(user) {
    console.log("login user >>",user);
    
    // this.userService.checkUser(user);
    this.http.post('http://localhost:3000/login',user)
      .subscribe(
        (data) => {
          data._body = JSON.parse(data._body); 
          console.log('post data >> ',data._body.loginErrMsg);
          if(data._body.loginErrMsg) {
            this.errMsgExist = true;
            this.errMsg = data._body.loginErrMsg
          }
          else {
            var ulist = data._body.userList ? data._body.userList : [];
            console.log('ulist',ulist)
            this.myRoute.navigate(["chat",{userList:ulist}]);
          }
        },
        err => {
          console.log('err >> ',err);
          this.errMsgExist = true;
          this.errMsg = "Something Going Wrong."
        }
    );


    // this.http({
    //   url: '/login',
    //   method: "POST",
    //   data: { 'loginData': user }
    // })
    //   .then(function (response) {
    //     console.log('done', response)
    //     this.errMsgExist = true;
    //     // angular.element("#errMsg").text(response.data.loginErrMsg);
    //     // angular.element("#"+$scope.currentID+'-chips').text(response.data.newChips);

    //   })
    //   .catch(function (err) {
    //     console.log('err', err)
    //   });

    // this.myRoute.navigate(["chat"]);
  }
}
