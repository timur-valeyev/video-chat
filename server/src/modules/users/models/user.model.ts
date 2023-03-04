import {Column, Model, Table} from "sequelize-typescript";

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
}