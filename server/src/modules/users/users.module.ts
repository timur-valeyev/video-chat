import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from './models/user.model'
import { TokenModule } from '../token/token.module'
import { Dialog } from '../dialog/models/dialogs.model'

@Module({
    imports: [SequelizeModule.forFeature([User, Dialog]), TokenModule],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService]
})
export class UsersModule {}
