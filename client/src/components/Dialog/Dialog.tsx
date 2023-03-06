import React from 'react'
import { IDialog } from '../../types/data'
import classes from './Dialog.module.scss'

interface DialogProps extends IDialog {
    onSelectDialog: (id: number) => void
}

const Dialog: React.FC<DialogProps> = (props) => {
    const { id, user, text, onSelectDialog } = props

    return (
        <div className={classes.dialog} onClick={() => onSelectDialog(id)}>
            <div className={classes.dialogsItem}>
                <div className={classes.profileImage}>
                    <img
                        src='https://www.meme-arsenal.com/memes/8a7ee66f57e5f041ce52d9fbb452f7ba.jpg'
                        alt='avatar'
                    />
                </div>
                <div>
                    <p className={classes.name}>{user.fullname}</p>
                    <p className={classes.shortText}>{text}</p>
                </div>
            </div>
            <div>
                <div className={classes.time}>yesterday</div>
            </div>
        </div>
    )
}

export default Dialog