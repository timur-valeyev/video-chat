import React, {useEffect} from "react";
import classes from './Dialogs.module.scss'
import Search from "antd/es/input/Search";
import {useDispatch, useSelector} from "react-redux";
import {fetchDialogs} from "../../redux/slices/dialogSlice";
import Dialog from "../Dialog";

const Dialogs = () => {
    const dispatch = useDispatch()
    const {status, error} = useSelector(state => state.dialogs)
    const dialogList = useSelector(state => state.dialogs.dialogList)


    useEffect(() => {
        dispatch(fetchDialogs())
    }, [dispatch])

    return (
        <div className={classes.dialogs}>
            <div className={classes.search}>
                <Search
                    placeholder="Поиск среди контактов"
                />
            </div>
            {status === 'loading' && <h2>Loading...</h2>}
            {error && <h2>Error: {error} </h2>}
            {dialogList.map((item) => (<Dialog key={item.id} {...item} />))}
        </div>
    )
}

export default Dialogs