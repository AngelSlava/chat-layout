import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {MessageImageComponent} from "./image/image.component";
import {MessageComponent} from "./message/message.component";
import {ChatComponent} from "./chat.component";

@NgModule({
  declarations: [
    ChatComponent,
    MessageComponent,
    MessageImageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: ChatComponent}
    ]),
  ],
  exports: [
    RouterModule
  ]
})

export class ChatModule {}
