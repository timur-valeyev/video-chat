export interface IDialog {
    id: number,
    name: string,
    company: any
}

export interface ICurrentDialog  {
    id: number,
    title: any,
    body: any
}

export interface IMessage {
    avatar: string,
    date: string,
    isMe: boolean,
    isTyping: boolean
}