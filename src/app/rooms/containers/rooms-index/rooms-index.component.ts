import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { RoomService } from '../../services/room.service'

@Component({
  selector: 'app-rooms-index',
  template: `
    <div *ngIf="room.user$ | async as user; else noUser">
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">
          Angular Lab Chat
        </span>
        <div class="nav-item">
          Logged in as {{user.username}}
        </div>
      </nav>
      <div *ngIf="room.messages$ | async as messages">
        <app-message-list [messages]="messages" (action)="handleAction($event)"></app-message-list>
      </div>
      <nav class="navbar fixed-bottom navbar-dark bg-dark">
        <app-message-form (action)="handleAction($event)"></app-message-form>
      </nav>
    </div>   
    <ng-template #noUser>
      <app-username (action)="handleAction($event)"></app-username>
    </ng-template>
  `,
})
export class RoomsIndexComponent implements OnInit {
  constructor(
    public room: RoomService,
    private router: Router,
  ) {}

  ngOnInit() {}

  handleAction({ type, payload}) {
    switch (type) {
      case 'LOGIN':
        return this.room.login(payload)
          .then(() => {
            this.router.navigate(['/'])
          })
      case 'SEND':
        return this.room.send(payload)
    }
  }

}
