import { Injectable } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class RoomService {
  private _user: { id: string; username: string }
  private _user$: Observable<any>
  private _messages$: Observable<any>

  public get user$() {
    return this._user$
  }

  public get messages$() {
    return this._messages$
  }

  public login(username: string) {
    const user = {
      username,
    }

    return this.fire
      .collection('Users')
      .doc(username)
      .set(user)
      .then(res => {
        console.log('res', res)
        window.localStorage.setItem('user', JSON.stringify(user))
        return res
      })
  }

  constructor(private fire: AngularFirestore) {
    this._user = JSON.parse(window.localStorage.getItem('user'))

    if (this._user.username) {
      this._user$ = this.fire
        .collection('Users')
        .doc(this._user.username)
        .valueChanges()
    }

    this._messages$ = this.fire.collection('Messages', ref => ref.orderBy('date', 'asc')).valueChanges()
  }

  public send(message) {
    const msg = {
      id: this.fire.createId(),
      username: this._user.username,
      message,
      date: new Date(),
    }
    this.fire
      .collection('Messages')
      .doc(msg.id)
      .set(msg)
      .then(() => {
        console.log('sent')
      })
    // this._messages$.
    // console.log(`${this._user.username} is sending message`, message)
  }
}
