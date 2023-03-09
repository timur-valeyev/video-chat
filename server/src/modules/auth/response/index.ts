import { IsString } from 'class-validator'

class UserResponse {
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
    password: string

    @IsString()
    phone: string
}

export class AuthUserResponse {
    user: UserResponse

    @IsString()
    token: string
}
