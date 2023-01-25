import React, {useEffect} from "react";
import classes from './Dialogs.module.scss'
import Search from "antd/es/input/Search";
import {fetchDialogs, choseDialog} from "../../redux/slices/dialogSlice";
import Dialog from "../Dialog";
import {useAppDispatch, useAppSelector} from "../../hook";


const Dialogs = () => {
    const dispatch = useAppDispatch()
    const {loading, error} = useAppSelector(state => state.dialogs)
    const dialogList = useAppSelector(state => state.dialogs.dialogList)

    useEffect(() => {
        dispatch(fetchDialogs())
    }, [dispatch])

    const onSelectDialog = (id: number) => {
        dispatch(choseDialog(id))
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.search}>
                <Search
                    placeholder="Поиск среди контактов"
                />
            </div>
            {loading && <h2>Loading...</h2>}
            {error && <h2>Error: {error} </h2>}
            {dialogList.map((item) => (<Dialog key={item.id} onSelectDialog={onSelectDialog} {...item} />))}
        </div>
    )
}

export default Dialogs