export interface IDialog {
    id: number,
    text: string,
    user: any,
}

export interface ICurrentDialog  {
    id: number,
    name: string,
    text: string,
    user: any
}

export interface IMessage {
    avatar: string,
    date: string,
    isMe: boolean,
    isTyping: boolean,
    text: string,
    user: any
}