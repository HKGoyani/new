import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chatData = {usermsg:''};
  userList = [{ un: 'hk', email: 'hk@gmail.com' }, { un: 'hk1', email: 'hk1@gmail.com' }]

  constructor(private myRoute: ActivatedRoute) { 
    this.myRoute.queryParams.subscribe(params => {
      console.log(JSON.stringify(params))
      this.userList = params["userList"];
      console.log(this.userList)
  });
  }

  ngOnInit() {
  }

  startChatWith(toid) {
    console.log(toid)
  }
  sendMsg(data) {
    console.log(data);

  }
  
}
