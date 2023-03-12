import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'
import { Dialog } from './models/dialogs.model'

@Injectable()
export class DialogsService {
    constructor(
        @InjectModel(Dialog) private readonly dialogRepository: typeof Dialog
    ) {}

    async createAsset(dto) {
        try {
            const dialog = await this.dialogRepository.create(dto)
            return dialog
        } catch (e) {
            throw new Error(e)
        }
    }
}
