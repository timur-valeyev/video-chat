import {BadRequestException, Injectable } from '@nestjs/common';
import {UsersService} from "../users/users.service";
import {Errors} from "../../common/errors";
import {UserLoginDTO} from "./dto";
import * as bcrypt from 'bcrypt'
import {AuthUserResponse} from "./response";
import {TokenService} from "../token/token.service";
import {CreateUserDto} from "../users/dto/CreateUserDto";


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly tokenService: TokenService
        ) {}

    async registerUsers(dto: CreateUserDto): Promise<CreateUserDto> {
        const existUser = await this.userService.findUserByEmail(dto.email)

        if(existUser) {
            throw new BadRequestException(Errors.USER_EXIST)
        }

        return this.userService.createUser(dto)
    }

    async loginUser (dto: UserLoginDTO): Promise<AuthUserResponse> {
        const existUser = await this.userService.findUserByEmail(dto.email)
        const validatePassword = await bcrypt.compare(dto.password, existUser.password)
        const userData = {
            name: existUser.firstName,
            email: existUser.email
        }
        const token = await this.tokenService.generateJwtToken(userData)
        const user = await this.userService.publicUser(dto.email)

        if(!existUser) {
            throw new BadRequestException(Errors.USER_NOT_FOUND)
        }

        if(!validatePassword) {
            throw new BadRequestException(Errors.WRONG_DATA)
        }


        return {...user, token}
    }
}
