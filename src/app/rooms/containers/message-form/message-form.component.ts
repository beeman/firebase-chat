import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-message-form',
  template: `    
    <form class="form-inline">
      <div class="input-group" style="width: 97vw;">
        <input class="form-control" type="text" placeholder="Type a message" name="message"
               [(ngModel)]="message" (keydown.enter)="submit()">
        <div class="input-group-append">
          <button class="btn btn-secondary" type="button" (click)="submit()">
            <i class="fa fa-envelope"></i>
          </button>
        </div>
      </div>
    </form>
  `,
})
export class MessageFormComponent {
  public message: string
  @Output() action = new EventEmitter()
  public submit() {
    this.action.emit({ type: 'SEND', payload: this.message })
    this.message = ''
  }
}
