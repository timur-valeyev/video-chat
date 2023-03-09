import { IsString } from 'class-validator'

export class UpdateUserDto {
    @IsString()
    firstName: string

    @IsString()
    lastName: string

    @IsString()
    surName: string

    @IsString()
    role: string

    @IsString()
    department: string

    @IsString()
    group: string

    @IsString()
    email: string

    @IsString()
    phone: string
}
