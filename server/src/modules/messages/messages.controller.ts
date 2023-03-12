import { Body, Controller, Req, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../../guards/jwt-guard'
import { MessagesService } from './messages.service'
import { MessagesDto } from './dto/MessagesDto'

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    // @UseGuards(JwtAuthGuard)
    @Post('create')
    createAsset(@Body() assetDto: MessagesDto, @Req() request) {

        return this.messagesService.createAsset(assetDto)
    }

}
