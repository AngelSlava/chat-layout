import {Component, Input, OnInit} from "@angular/core";
import {IMessage} from "../chat.component";

@Component({
  selector: 'mk-chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit {
  @Input() message: IMessage | undefined

  ngOnInit() {
    console.log('init')
  }
}
