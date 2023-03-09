import {
    Column,
    Model,
    Table,
    BelongsTo,
    ForeignKey
} from 'sequelize-typescript'
import { User } from '../../users/models/user.model'
import { Dialog } from '../../dialog/models/dialogs.model'

@Table
export class Message extends Model<Message> {
    @Column
    content: string

    @ForeignKey(() => User)
    @Column
    authorId: string

    // @BelongsTo(() => User)
    // user: User;

    // @ForeignKey(() => Dialog)
    // @Column
    // dialogId: string;
    //
    // @BelongsTo(() => Dialog)
    // dialog: Dialog;
}
