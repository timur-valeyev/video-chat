import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Message } from './models/messages.model'

@Injectable()
export class MessagesService {
    constructor(
        @InjectModel(Message) private readonly messageRepository: typeof Message
    ) {}

    async createAsset(user, dto) {
        try {
            const message = {
                user: user.id,
                name: dto.name,
                assetId: dto.assetId
            }
            await this.messageRepository.create(message)
            return message
        } catch (e) {
            throw new Error(e)
        }
    }
}
