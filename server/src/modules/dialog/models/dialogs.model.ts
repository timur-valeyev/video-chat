import {
    Column,
    HasMany,
    Model,
    Table,
    BelongsTo,
    ForeignKey
} from 'sequelize-typescript'
import { User } from '../../users/models/user.model'

@Table
export class Dialog extends Model {
    @Column
    name: string

    @ForeignKey(() => User)
    user: User

    @Column
    assetId: string

    @BelongsTo(() => User)
    owner: User

    // @HasMany(() => Message)
    // messages: Message[];
}

// @Table
// export class Message extends Model<Message> {
//   @Column
//   content: string;
//
//   @ForeignKey(() => User)
//   @Column
//   authorId: string;
//
//   @BelongsTo(() => User)
//   user: User;
//
//   @ForeignKey(() => Dialog)
//   @Column
//   dialogId: string;
//
//   @BelongsTo(() => Dialog)
//   dialog: Dialog;
// }
