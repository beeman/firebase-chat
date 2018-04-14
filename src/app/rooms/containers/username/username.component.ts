import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-username',
  template: `
    <div class="col-md-8 mx-auto my-5">
      <div class="form-group">
        <label for="username">Username</label>
        <input class="form-control" required type="text" id="username"
               [(ngModel)]="username" name="username" placeholder="Username" (keydown.enter)="submit()">
      </div>
      <button class="btn btn-block btn-primary" (click)="submit()">
        Submit
      </button>
    </div>
  `,
  styles: []
})
export class UsernameComponent {
  public username: string
  @Output() action = new EventEmitter()
  public submit() {
    this.action.emit({ type: 'LOGIN', payload: this.username})
  }
}
