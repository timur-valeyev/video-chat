import { Body, Controller, Req, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../../guards/jwt-guard'
import { DialogsService } from './dialogs.service'
import { DialogsDto } from './dto/DialogsDto'

@Controller('dialogs')
export class DialogsController {
    constructor(private readonly dialogService: DialogsService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    createAsset(@Body() dto: DialogsDto, @Req() request) {
        return this.dialogService.createAsset(dto)
    }
}
