import {Component, OnInit} from "@angular/core";

export interface IMessage {
  id: number,
  date?: string,
  isMy?: boolean,
  unread: boolean,
  message: string,
  images?: [{
    src: string
  }]
}

@Component({
  selector: 'mk-chat-component',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {

  messages: IMessage[] | undefined
  loading = false
  interval: any

  ngOnInit() {
    this.loading = true
    this.loadMessages().then(result => {
      this.messages = result
      this.startChat()
      this.loading = false
    })
  }

  generateMessage (index?: number): IMessage {
    const id = index || Date.now()
    const isMy = !(+(Math.random() * 100).toFixed(0) % 2)
    const isImages = +(Math.random() * 100).toFixed(0) % 2
    const messages = [
      'Hello! \n how are you?',
      'kdjodioqwepoqwieopwieopqwieopqwieopqwieopdkasokopsdiaopsdiaposdipoasidpaosdiaposdasdalsdka;lsdka;lsdka;lsdka;lsdka;lsdka',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, autem cum cumque debitis delectus error et in maxime necessitatibus placeat, possimus, vero. Delectus incidunt iure magni omnis reiciendis temporibus voluptatum!'
    ]
    const date = new Date().toLocaleString()
    const message: IMessage = {
      id,
      unread: true,
      date,
      message: messages[Math.floor(Math.random()*messages.length)],
      isMy
    }
    if (isImages) {
      // Object.assign(message, {
      //   images: [
      //     { src: `https://loremflickr.com/800/600?c=${id}` }
      //   ]
      // })
    }
    return message
  }

  startChat () {
    this.interval = setInterval(() => {
      const m = this.generateMessage()
      this.messages?.push(m)
    }, 5000)
  }

  loadMessages (): Promise<IMessage[]> {
    const content:IMessage[] = []
    for (let i = 0; i < 20; i++) {
      const m = this.generateMessage(i)
      content.push(m)
    }
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(content)
      }, 1500)
    })
  }
}