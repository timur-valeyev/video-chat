import { IsNumber } from 'class-validator'


export class ChatDto {
    @IsNumber()
    userId: number
}
