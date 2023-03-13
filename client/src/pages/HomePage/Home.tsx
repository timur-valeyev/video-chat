import React, { useEffect, useRef, useState } from 'react'
import { Input } from 'antd'
import { AudioOutlined, CameraOutlined, SendOutlined } from '@ant-design/icons'

//components
import Dialogs from '../../components/Dialogs'
import Messages from '../../components/Messages'
import { socket } from '../../redux/slices/messagesSlice'
import classes from './Home.module.scss'

const Home = () => {
    const [text, setText] = useState('')
    const inputRef = useRef<any>(null)

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()
    }, [])

    const sendMessage = (e: any) => {
        e.preventDefault()
        if (text) {
            socket.emit('message', { text })
            setText('')
        }
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') {
            sendMessage(e)
        }
    }

    return (
        <>
            <aside className={classes.chatAside}>
                <Dialogs />
            </aside>
            <main className={classes.chatMain}>
                <div className={classes.chatMessage}>
                    <Messages />
                </div>
                <div className={classes.chatInput}>
                    <form>
                        <Input
                            type='text'
                            ref={inputRef}
                            value={text}
                            placeholder='Введите сообщение'
                            onChange={(event) =>
                                setText(event.target.value)
                            }
                            onKeyDown={handleKeyDown}
                        />
                        <div className={classes.icons}>
                            <CameraOutlined />
                            <AudioOutlined />
                            <SendOutlined onClick={sendMessage} />
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default Home