import { Column, HasMany, Model, Table } from 'sequelize-typescript'
import { Dialog } from '../../dialog/models/dialogs.model'
// import {Message} from '../../dialogs/dialogs/models/dialogs.model'

@Table
export class User extends Model {
    @Column
    firstName: string

    @Column
    lastName: string

    @Column
    surName: string

    @Column
    role: string

    @Column
    department: string

    @Column
    group: string

    @Column
    email: string

    @Column
    password: string

    @Column
    phone: string

    @HasMany(() => Dialog, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    dialogs: Dialog[]

    // @HasMany(() => Message)
    // messages: Message[];
}
