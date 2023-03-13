import React, { useEffect } from 'react'
import Search from 'antd/es/input/Search'
import { fetchDialogs, choseDialog } from '../../redux/slices/dialogSlice'
import Dialog from '../Dialog'
import { useAppDispatch, useAppSelector } from '../../hook'
import { fetchMessages } from '../../redux/slices/messagesSlice'
import classes from './Dialogs.module.scss'

const Dialogs = () => {
    const dispatch = useAppDispatch()
    const dialogList = useAppSelector((state) => state.dialogs.dialogList)

    useEffect(() => {
        dispatch(fetchDialogs())
    }, [dispatch])

    const onSelectDialog = (id: number) => {
        dispatch(choseDialog(id))
        dispatch(fetchMessages())
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.search}>
                <Search placeholder='Поиск среди контактов' />
            </div>
            {dialogList.map((item) => (
                <Dialog
                    key={item.id}
                    onSelectDialog={onSelectDialog}
                    {...item}
                />
            ))}
        </div>
    )
}

export default Dialogs