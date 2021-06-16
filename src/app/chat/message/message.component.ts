import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {IMessage} from "../chat.component";

@Component({
  selector: 'mk-chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent implements AfterViewInit {
  @ViewChild('itemElement', {static: false}) itemElement: ElementRef | undefined;
  @Input() message: IMessage | undefined
  alreadyRendered: boolean | undefined;

  ngAfterViewInit() {
    const commentEl = this.itemElement?.nativeElement;
    const elToObserve = commentEl.parentElement;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        this.renderContents(entry.isIntersecting)
      });
    }, {});
    observer.observe(elToObserve);
  }

  renderContents(isInView: any) {
    if (isInView && !this.alreadyRendered) {
      this.alreadyRendered = true;
    }
  }
}
