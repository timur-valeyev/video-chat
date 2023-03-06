import React, { useEffect, useRef, useState } from 'react'
import { Input } from 'antd'
import { AudioOutlined, CameraOutlined, SendOutlined } from '@ant-design/icons'

//components
import Dialogs from '../../components/Dialogs'
import Header from '../../components/Header'
import Messages from '../../components/Messages'
import { useAppDispatch } from '../../hook'
import { addMessage } from '../../redux/slices/messagesSlice'
import classes from './Home.module.scss'

const Home = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()
    const inputRef = useRef<any>(null)

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()
    }, [])

    const sendMessage = () => {
        dispatch(addMessage(text))
        setText('')
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
        event
    ) => {
        if (event.key === 'Enter') sendMessage()
    }

    return (
        <div className={classes.homeContainer}>
            <Header />
            <div className={classes.mess}>
                <Dialogs />
                <div className={classes.content}>
                    <Messages />
                    <div className={classes.message}>
                        <div className={classes.input}>
                            <Input
                                ref={inputRef}
                                value={text}
                                placeholder='Введите сообщение'
                                onChange={(event) =>
                                    setText(event.target.value)
                                }
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                        <div className={classes.icons}>
                            <CameraOutlined />
                            <AudioOutlined />
                            <SendOutlined onClick={sendMessage} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home