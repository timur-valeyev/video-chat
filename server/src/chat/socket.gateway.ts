import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  ConnectedSocket
} from '@nestjs/websockets'
import { Server, Socket } from 'socket.io';
import { SocketService } from './socket.service'
import { MessagesService } from '../modules/messages/messages.service'

@WebSocketGateway({
  namespace: 'chat',
  cors: {
    origin: '*'
  }
})
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private socketService: SocketService,
      private readonly messageService: MessagesService) { }

  @WebSocketServer() server: Server

  handleConnection(@ConnectedSocket() client: Socket) {
    if (!this.socketService.getClientId(client.id)) this.socketService.addClient(client)
  }
  handleDisconnect(@ConnectedSocket() client: Socket) {
    this.socketService.removeClient(client.id)
    client.disconnect(true)
  }

  @SubscribeMessage('message')
  async handleMessage(client: Socket, payload: any) {
    await this.messageService.createAsset(payload);
    this.server.emit('message', payload);
  }
}