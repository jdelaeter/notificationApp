import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notificationApp';
  numberUnread = 0

  ngOnInit() {
    console.log(this.getNumberUnread())
    this.numberUnread = this.getNumberUnread()
  }


  public notifications: any[] = [
    {
      "nom": "Webber",
      "prenom": "Mark",
      "text": "reacted to your recent post",
      "boldText": "My first tournament today !",
      "read": false,
      "msgDate": "1m ago",
      "privateMessage": "",
      "groupName": "",
      "image": "../assets/img/Oval-5.png",
      "imageCommente": ""
    },
    {
      "nom": "Gray",
      "prenom": "Angela",
      "text": "followed you",
      "boldText": "",
      "read": false,
      "msgDate": "5m ago",
      "privateMessage": "",
      "groupName": "",
      "image": "../assets/img/Group6.png",
      "imageCommente": ""
    },
    {
      "nom": "Thompson",
      "prenom": "Jacob",
      "text": "had joined your group",
      "boldText": "",
      "read": false,
      "msgDate": "1 day ago",
      "privateMessage": "",
      "groupName": "Chess Club",
      "image": "../assets/img/Oval-1.png",
      "imageCommente": ""
    },
    {
      "nom": "Hasanuddin",
      "prenom": "Ricky",
      "text": "sent you a private message",
      "boldText": "",
      "read": true,
      "msgDate": "5 day ago",
      "privateMessage": "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
      "groupName": "",
      "image": "../assets/img/Oval.png",
      "imageCommente": ""
    },
    {
      "nom": "Smith",
      "prenom": "Kimberly",
      "text": "commented on your picture",
      "boldText": "",
      "read": true,
      "msgDate": "1 week ago",
      "privateMessage": "",
      "groupName": "",
      "image": "../assets/img/Oval-4.png",
      "imageCommente": "../assets/img/Rectangle.png"
    },
    {
      "nom": "Peterson",
      "prenom": "Nathan",
      "text": "reacted to your recent post",
      "boldText": "5 end-game strategies to increase your win rate",
      "read": true,
      "msgDate": "2 weeks ago",
      "privateMessage": "",
      "groupName": "",
      "image": "../assets/img/Oval-3.png",
      "imageCommente": ""
    },
    {
      "nom": "Kim",
      "prenom": "Anna",
      "text": "left the group",
      "boldText": "",
      "read": true,
      "msgDate": "2 weeks ago",
      "privateMessage": "",
      "groupName": "Chess club",
      "image": "../assets/img/Oval-2.png",
      "imageCommente": ""
    }
  ];

  public getNumberUnread(): number {
    return this.notifications.filter((notif) => notif.read === false).length
  }

  public readAll(): void {
    this.notifications.map((notif) => notif.read = true)
  }

}
