import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Dialog } from './models/dialogs.model'

@Injectable()
export class DialogsService {
    constructor(
        @InjectModel(Dialog) private readonly dialogRepository: typeof Dialog
    ) {}

    async createAsset(user, dto) {
        try {
            console.log(user)
            const dialog = {
                user: user.id,
                name: dto.name,
                assetId: dto.assetId
            }
            await this.dialogRepository.create(dialog)
            return dialog
        } catch (e) {
            throw new Error(e)
        }
    }
}
