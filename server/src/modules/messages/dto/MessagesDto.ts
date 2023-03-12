import { IsNumber, IsString } from 'class-validator'


export class MessagesDto {
    @IsNumber()
    userId: number;

    @IsNumber()
    chatId: number;

    @IsNumber()
    dialogId: number;

    @IsString()
    text: string;
}
