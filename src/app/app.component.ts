import { Component } from '@angular/core';
// import * as io from "socket.io-client";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App';
  // socket = io('http://localhost:3000');

  ngOnInit() {
    // this.socket.on('OUC', function (data) {
    //   console.log("OUC >> ",data);
    // });
  }
}
