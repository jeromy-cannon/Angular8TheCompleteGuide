import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '.app-servers',
  // selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server>
  //   </app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'TestServer';
  serverCreationStatus = 'No server was created!';
  userName = '';
  serverCreated = false;
  servers = ['TestServer', 'TestServer2'];
  secretPassword = false;
  secretPasswordList = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onSecretPasswordClick() {
    this.secretPassword = !this.secretPassword;
    this.secretPasswordList.push(this.secretPassword + ' ' + new Date());
  }
}
