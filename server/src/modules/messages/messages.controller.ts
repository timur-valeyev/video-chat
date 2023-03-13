import { Body, Controller, Req, Post, UseGuards, Get } from '@nestjs/common'
import { JwtAuthGuard } from '../../guards/jwt-guard'
import { MessagesService } from './messages.service'
import { MessagesDto } from './dto/MessagesDto'
import { Message } from './models/messages.model'

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    // @UseGuards(JwtAuthGuard)
    @Post('create')
    createAsset(@Body() assetDto: MessagesDto, @Req() request) {
        return this.messagesService.createAsset(assetDto)
    }
    @Get('get-all-messages')
    async findAll(): Promise<Message[]> {
        return this.messagesService.findAll();
    }
}
