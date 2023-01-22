import React from "react";
import classes from "./Message.module.scss";

//components

const Message = ({title, isMe, avatar, date, isTyping}) => {
    return (
        <div className={isMe ? classes.block : classes.block_isMe}>
            <div className={classes.container}>
                <div className={classes.avatar}>
                    <img src={avatar} alt="avatar"/>
                </div>
                <div className={classes.info}>
                    <div className={isMe ? classes.content : classes.content_isMe}>
                        {isTyping ? (
                            <div className={classes.typing}>
                                <span />
                                <span />
                                <span />
                            </div>
                        ) : (
                            title && <p className={classes.text}>{title}</p>
                        )}
                    </div>
                    {date && <span className={classes.date}>{date}</span>}
                </div>
            </div>
        </div>

    )
}

export default Message