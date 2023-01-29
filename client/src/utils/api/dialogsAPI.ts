import {axios} from "../../core"

export default {
    getAllDialogs: () => axios.get('dialogs'),
    getCurrentDialog: (id: number) => axios.get(`dialogs?id=${id}`)
}