import {Injectable} from '@nestjs/common'
import {users} from "../../mocks"
import {InjectModel} from "@nestjs/sequelize";
import {User} from "./models/user.model";
import * as bcrypt from 'bcrypt'
import {CreateUserDTO} from "./dto";


@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private readonly userRepository: typeof User) {}

    async hashPassword(password) {
        return bcrypt.hash(password, 10)
    }

    async findUserByEmail(email: string) {
        return this.userRepository.findOne({where: {email}})
    }

    async createUser(dto: CreateUserDTO): Promise<CreateUserDTO> {
        dto.password = await this.hashPassword(dto.password)

        await this.userRepository.create({
            firstName: dto.firstName,
            lastName: dto.lastName,
            surName: dto.surName,
            role: dto.role,
            department: dto.department,
            group: dto.group,
            email: dto.email,
            password: dto.password,
            phone: dto.phone
        })

        return dto
    }

    async publicUser(email: string) {
        return this.userRepository.findOne({
            where: {email},
            attributes: {exclude: ['password']}
        })
    }

    getUsers() {
        return users
    }
}
