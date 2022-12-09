import React from "react";
import classes from "./Message.module.scss";

//components

const Message = ({avatar, text, isMe}) => {
    return (
        <div className={isMe ? classes.block : classes.block_isMe}>
            <div className={classes.container}>
                <div className={classes.avatar}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className={classes.info}>
                    <div className={isMe ? classes.content : classes.content_isMe}>
                        <p className={classes.text}>
                            {text}
                        </p>
                    </div>
                    <span className={classes.date}>
                5 минут назад
            </span>
                </div>
            </div>
        </div>

    )
}

export default Message