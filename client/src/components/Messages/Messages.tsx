import React from "react";
import Message from "../Message";
import { useAppSelector} from "../../hook";


const Messages = () => {
    const messages = useAppSelector(state => state.dialogs.currentDialog)

    return (
        <>
            {messages.map((message) =>
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