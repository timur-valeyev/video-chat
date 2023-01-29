import {axios} from "../../core"

export default {
    getAllMessages: (id: number) => axios.get(`messages?id=${id}`),
    addMessage: (text: string) => axios({
        method: 'post',
        url: 'messages',
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            user: {
                fullname: 'Me',
            },
            text: text,
        }
    })
}