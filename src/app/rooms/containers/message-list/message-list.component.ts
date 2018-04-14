import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-message-list',
  template: `
    <div class="row" *ngFor="let message of messages">
      <div class="col-1 text-nowrap">
        <strong>{{ message.username }}</strong>
      </div>
      <div class="col-8">
        {{ message.message }}
      </div>
      <div class="col-2 text-nowrap">
        {{ message.date | date: 'short' }}
      </div>
    </div>
  `,
})
export class MessageListComponent {
  @Input() messages: any[]
}
