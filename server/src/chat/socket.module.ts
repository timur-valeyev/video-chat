import { Module } from '@nestjs/common';
import { SocketGateway } from './socket.gateway'
import { SocketService } from './socket.service'
import { MessagesModule } from '../modules/messages/messages.module'


@Module({
  imports: [MessagesModule],
  providers: [SocketGateway, SocketService]
})
export class SocketModule {}
