import { Body, Controller, Req, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../../guards/jwt-guard'
import { ChatService } from './chat.service'
import { ChatDto } from './dto/ChatDto'


@Controller('chat')
export class ChatController {
    constructor(private readonly chatService: ChatService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    createAsset(@Body() dto: ChatDto, @Req() request) {
        return this.chatService.createAsset(dto)
    }
}
