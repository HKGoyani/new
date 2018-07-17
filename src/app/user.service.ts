import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  checkUser(user) {
    console.log('in user service ',user)
    // this.http.post('/login',user).map(res => res.json());
    // this.http.post('/login', user)
    //   .then(function (response) {
    //     console.log('done', response)
    //     this.errMsgExist = true;
    //     // angular.element("#errMsg").text(response.data.loginErrMsg);
    //     // angular.element("#"+$scope.currentID+'-chips').text(response.data.newChips);

    //   })

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
  }
}
