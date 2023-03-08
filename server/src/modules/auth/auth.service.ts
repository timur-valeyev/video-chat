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
        private readonly userService: UsersService) {}

    async registerUsers(dto: CreateUserDto): Promise<AuthUserResponse> {
        try {
            const existUser = await this.userService.findUserByEmail(dto.email)

            if(existUser) {
                throw new BadRequestException(Errors.USER_EXIST)
            }

            await this.userService.createUser(dto)

            return this.userService.publicUser(dto.email)

        } catch (e) {
            throw new Error(e)
        }
    }

    async loginUser (dto: UserLoginDTO): Promise<AuthUserResponse> {
        try {
            const existUser = await this.userService.findUserByEmail(dto.email)
            const validatePassword = await bcrypt.compare(dto.password, existUser.password)

            if (!existUser) {
                throw new BadRequestException(Errors.USER_NOT_FOUND)
            }

            if (!validatePassword) {
                throw new BadRequestException(Errors.WRONG_DATA)
            }

            return this.userService.publicUser(dto.email)
        }
         catch (e) {
            throw new Error(e)
        }
    }
}
