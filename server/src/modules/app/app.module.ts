import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UsersModule } from '../users/users.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize'
import config from '../../config'
import { User } from '../users/models/user.model'
import { AuthModule } from '../auth/auth.module'
import { TokenModule } from '../token/token.module'
import { Dialog } from '../dialogs/models/dialogs.model'
import { DialogsModule } from '../dialogs/dialogs.module'
import { MessagesModule } from '../messages/messages.module'
import { Message } from '../messages/models/messages.model'
import { ChatModule } from '../chat/chat.module'
import { Chat } from '../chat/models/chat.model'
import { SocketModule } from '../../chat/socket.module'

@Module({
    imports: [
        SocketModule,
        ChatModule,
        MessagesModule,
        DialogsModule,
        TokenModule,
        AuthModule,
        UsersModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config]
        }),
        SequelizeModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                dialect: 'postgres',
                host: configService.get('db_host'),
                port: configService.get('db_port'),
                database: configService.get('db_name'),
                username: configService.get('db_user'),
                password: configService.get('db_password'),
                synchronize: true,
                autoLoadModels: true,
                models: [User, Dialog, Message, Chat]
            })
        })
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
