import React from "react";
import classes from './Dialog.module.scss'


const Dialog = ({id, name, company, onSelectDialog }) => {
    return (
        <div className={classes.dialog} onClick={() => onSelectDialog(id)}>
            <div className={classes.dialogsItem}>
                <div className={classes.profileImage}>
                    <img src='https://www.meme-arsenal.com/memes/8a7ee66f57e5f041ce52d9fbb452f7ba.jpg' alt="avatar"/>
                </div>
                <div className={classes.header}>
                    <p className={classes.name}>{name}</p>
                    <p className={classes.shortText}>{company.catchPhrase}</p>
                </div>
            </div>
            <div className={classes.messageStatus}>
                <div className={classes.time}>yesterday</div>
            </div>
        </div>
    )
}

export default Dialog