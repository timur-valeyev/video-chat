import React from "react";
import {useSelector} from "react-redux";
import Message from "../Message";


const Messages = () => {
    const messages = useSelector(state => state.dialogs.currentDialog)

    return (
        <>
            {messages.map(message =>
                <Message
                    key={message.id}
                    avatar='https://cdn.freelance.ru/images/att/1575043_900_600.png'
                    date='yestarday'
                    isMe
                    isTyping={false}
                    {...message}
                />)}
        </>
    )
}

export default Messages