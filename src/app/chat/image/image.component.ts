import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'message-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})

export class MessageImageComponent {
  @Input() src: any
  @Input() isRendered: boolean | undefined
}
