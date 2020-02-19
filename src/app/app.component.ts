import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-testing';

  constructor(public messageService: MessageService, private router: Router) {}

  ngOnInit() {
    this.messageService.pushMessage('ngOnInit..');
    // console.log('ngOnInit..');
  }

  updateTitle() {
    this.title = this.title + ' updated';
  }

  asyncTest() {
    this.messageService.pushMessage('1');
    // console.log('1');
    setTimeout(() => {
      this.messageService.pushMessage('2');
      // console.log('2');
    }, 0);
    const p1 = new Promise((resolve, reject) => {
      resolve('3');
    });
    p1.then(val => {
      this.messageService.pushMessage('p1- ' + val);
      // console.log('p1', val);
    });
    p1.then(val => {
      this.messageService.pushMessage('p1- ' + val);
      // console.log('p1', val);
    });
    const p2 = Promise.resolve('4');
    p2.then(val => {
      this.messageService.pushMessage('4');
      // console.log(val);
    });

    this.messageService.pushMessage('5');
    // console.log('5');
  }

  navigateTo(page: string) {
    this.router.navigate([page]);
  }
}
