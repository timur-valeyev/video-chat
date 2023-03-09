import { Body, Controller, Post, UseGuards } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UserLoginDTO } from './dto'
import { AuthUserResponse } from './response'
import { JwtAuthGuard } from '../../guards/jwt-guard'
import { CreateUserDto } from '../users/dto/CreateUserDto'

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(@Body() dto: CreateUserDto): Promise<AuthUserResponse> {
        return this.authService.registerUsers(dto)
    }

    @Post('login')
    login(@Body() dto: UserLoginDTO): Promise<AuthUserResponse> {
        return this.authService.loginUser(dto)
    }

    @UseGuards(JwtAuthGuard)
    @Post('test')
    testGuard() {
        return true
    }
}
