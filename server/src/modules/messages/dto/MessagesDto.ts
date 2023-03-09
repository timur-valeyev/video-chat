import { IsString } from 'class-validator'

export class MessagesDto {
    @IsString()
    name: string

    @IsString()
    assetId: string
}
