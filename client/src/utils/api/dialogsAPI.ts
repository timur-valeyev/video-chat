import { axios } from '../../core'

export const dialogsAPI = {
    getAllDialogs: () => axios.get('dialogs'),
    getCurrentDialog: (id: number) => axios.get(`dialogs?id=${id}`)
}
