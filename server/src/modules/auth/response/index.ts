import {IsString} from "class-validator";

export class AuthUserResponse {
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

    @IsString()
    token: string
}