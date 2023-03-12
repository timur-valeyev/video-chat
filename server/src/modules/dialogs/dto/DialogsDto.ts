import { IsNumber } from 'class-validator'


export class DialogsDto {
    @IsNumber()
    userId: number

    @IsNumber()
    chatId: number
}
