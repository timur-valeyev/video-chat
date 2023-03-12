import { Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { Chat } from './models/chat.model'
import { ChatController } from './chat.controller'
import { ChatService } from './chat.service'

@Module({
    imports: [SequelizeModule.forFeature([Chat])],
    controllers: [ChatController],
    providers: [ChatService]
})
export class ChatModule {}
