import {Component, OnInit} from "@angular/core";

export interface IMessage {
  id: number,
  date?: string,
  isMy?: boolean,
  unread: boolean,
  message: string,
  images?: IImage[]
}

export interface IImage {
  location: string
  height?: number
  width?: number
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
      this.generateImages()
      const images = this.generateImages()
      Object.assign(message, { images })
    }
    return message
  }

  generateImages () {
    const images = []
    const count = +(Math.random() * 5).toFixed(0)
    for (let i = 0; i < count; i++) {
      const image = this.generateImage(count)
      images.push(image)
    }
    return images
  }

  generateImage (id: number) {
    const sizes = [797, 600, 545, 400, 879, 1199, 300, 198]
    const height = sizes[Math.floor(Math.random()*sizes.length)]
    const width = sizes[Math.floor(Math.random()*sizes.length)]
    return {
      location: `https://loremflickr.com/${width}/${height}?c=${id}`,
      height,
      width
    }
  }

  startChat () {
    this.interval = setInterval(() => {
      const m = this.generateMessage()
      this.messages?.push(m)
    }, 5000)
  }

  loadMessages (): Promise<IMessage[]> {
    const content:IMessage[] = []
    for (let i = 0; i < 50; i++) {
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
