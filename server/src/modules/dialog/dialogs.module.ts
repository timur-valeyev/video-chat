import { Module } from '@nestjs/common'
import { DialogsController } from './dialogs.controller'
import { DialogsService } from './dialogs.service'
import { SequelizeModule } from '@nestjs/sequelize'
import { Dialog } from './models/dialogs.model'

@Module({
    imports: [SequelizeModule.forFeature([Dialog])],
    controllers: [DialogsController],
    providers: [DialogsService]
})
export class DialogsModule {}
