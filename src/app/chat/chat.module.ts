import {NgModule} from "@angular/core";
import {MessageComponent} from "./message/message.component";
import {ChatComponent} from "./chat.component";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    ChatComponent,
    MessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {path: '', component: ChatComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class ChatModule {}
