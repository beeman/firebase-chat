import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'
import { RoomService } from './services/room.service'
import { RoomsIndexComponent } from './containers/rooms-index/rooms-index.component'
import { MessageListComponent } from './containers/message-list/message-list.component'
import { MessageFormComponent } from './containers/message-form/message-form.component'
import { UsernameComponent } from './containers/username/username.component'

const routes: Routes = [
  {
    path: '',
    component: RoomsIndexComponent,
    children: [],
  },
]

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [RoomsIndexComponent, MessageListComponent, MessageFormComponent, UsernameComponent],
  providers: [RoomService],
})
export class RoomsModule {}
