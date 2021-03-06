import {Component, Input, OnInit} from "@angular/core";
import {IImage} from "../chat.component";

@Component({
  selector: 'message-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})

export class MessageImageComponent implements OnInit {
  @Input() image: IImage | undefined
  @Input() isRendered: boolean | undefined

  paddingSize = 60
  width = 304

  ngOnInit() {
    if (this.image) {
      const { width = 1, height = 1 } = this.image
      const paddingSize = Math.floor(height / width * 100)
      this.paddingSize = paddingSize > 150 ? 150 : paddingSize
    }
  }
}
