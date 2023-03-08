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

export interface IAuthState {
    user: {},
    isLoggedIn: boolean,
    loading: boolean,
    error: null | boolean
}

export interface ILoginData {
    email: string
    password: string
}

export interface IRegisterData {
    firstName: string
    surName: string
    lastName: string
    role: string
    department: string
    group: string
    email: string
    password: string
    phone: string
}