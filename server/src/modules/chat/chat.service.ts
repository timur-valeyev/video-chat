import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Chat } from './models/chat.model'

@Injectable()
export class ChatService {
    constructor(
        @InjectModel(Chat) private readonly chatRepository: typeof Chat
    ) {}

    async createAsset(dto) {
        try {
            const chat = await this.chatRepository.create(dto)
            return chat
        } catch (e) {
            throw new Error(e)
        }
    }
}
