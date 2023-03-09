import { IsString } from 'class-validator'

export class DialogsDto {
    @IsString()
    name: string

    @IsString()
    assetId: string
}
