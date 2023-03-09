import { Body, Controller, Req, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../../guards/jwt-guard'
import { MessagesService } from './messages.service'
import { MessagesDto } from './dto/MessagesDto'

@Controller('dialogs')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    createAsset(@Body() assetDto: MessagesDto, @Req() request) {
        const user = request.user
        return this.messagesService.createAsset(user, assetDto)
    }
}
