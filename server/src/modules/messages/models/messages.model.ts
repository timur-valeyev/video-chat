import {
    Column,
    Model,
    Table,
    BelongsTo,
    ForeignKey
} from 'sequelize-typescript'
import { User } from '../../users/models/user.model'
import { Dialog } from '../../dialogs/models/dialogs.model'
import { Chat } from '../../chat/models/chat.model'

@Table
export class Message extends Model<Message> {
    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Chat)
    @Column
    chatId: number;

    @BelongsTo(() => Chat)
    chat: Chat;

    @ForeignKey(() => Dialog)
    @Column
    dialogId: number;

    @BelongsTo(() => Dialog)
    dialog: Dialog;

    @Column
    text: string;
}
