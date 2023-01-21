import React from "react";
import classes from './Dialogs.module.scss'
import Search from "antd/es/input/Search";

const Dialogs = (props) => {
    const onSearch = (value) => console.log(value);

    return (
        <div className={classes.dialogs}>
            <div className={classes.search}>
                <Search
                    placeholder="Поиск среди контактов"
                    onSearch={onSearch}
                />
            </div>
            {props.dialogData.map((item, index) => (
                    <div className={classes.dialog} key={index}>
                        <div className={classes.dialogsItem}>
                            <div className={classes.profileImage}>
                                <img src='https://www.meme-arsenal.com/memes/8a7ee66f57e5f041ce52d9fbb452f7ba.jpg' alt="avatar" />
                            </div>
                            <div className={classes.header}>
                                <p className={classes.name}>{item.name}</p>
                                <p className={classes.shortText}>{item.shortText}</p>
                            </div>
                        </div>
                        <div className={classes.messageStatus}>
                            <div className={classes.time}>yesterday</div>
                        </div>
                    </div>
            ))}
        </div>
    )
}

export default Dialogs