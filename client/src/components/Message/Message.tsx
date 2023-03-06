import React from 'react'
import { IMessage } from '../../types/data'
import classes from './Message.module.scss'

interface MessagesProps extends IMessage {
    name: string
    text: string
    user: any
}

const Message = (props: MessagesProps) => {
    const { isMe, avatar, date, isTyping, text, user } = props

    return (
        <div className={isMe ? classes.block : classes.block_isMe}>
            <div className={classes.container}>
                <div className={classes.avatar}>
                    <img src={avatar} alt='avatar' />
                </div>
                <div>
                    <div
                        className={
                            isMe ? classes.content : classes.content_isMe
                        }
                    >
                        {isTyping ? (
                            <div className={classes.typing}>
                                <span />
                                <span />
                                <span />
                            </div>
                        ) : (
                            text && (
                                <>
                                    <p>{user.fullname}</p>
                                    <p>{text}</p>
                                </>
                            )
                        )}
                    </div>
                    {date && <span className={classes.date}>{date}</span>}
                </div>
            </div>
        </div>
    )
}

export default Message