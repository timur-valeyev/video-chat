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

@Table
export class Chat extends Model {
    @ForeignKey(() => User)
    @Column
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @HasMany(() => Message)
    messages: Message[];

}
