import {
    Column,
    HasMany,
    Model,
    Table,
    BelongsTo,
    ForeignKey
} from 'sequelize-typescript'
import { User } from '../../users/models/user.model'
import { Message } from '../../messages/models/messages.model'
import { Chat } from '../../chat/models/chat.model'

@Table
export class Dialog extends Model {
    @ForeignKey(() => Chat)
    @Column
    chatId: number;

    @BelongsTo(() => Chat)
    chat: Chat;

    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @HasMany(() => Message)
    messages: Message[];
}
