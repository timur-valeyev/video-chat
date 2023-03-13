import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Message } from './models/messages.model'

@Injectable()
export class MessagesService {
    constructor(
        @InjectModel(Message) private readonly messageRepository: typeof Message
    ) {}

    async createAsset(dto) {
        try {
            const message = await this.messageRepository.create(dto)
            return message
        } catch (e) {
            throw new Error(e)
        }
    }
    async findAll(): Promise<Message[]> {
        return this.messageRepository.findAll();
    }
}
