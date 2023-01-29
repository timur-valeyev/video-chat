import React, {useState} from 'react'
import classes from './Home.module.scss'
import {Input} from "antd";
import {AudioOutlined, CameraOutlined, SendOutlined} from "@ant-design/icons";

//components
import Dialogs from "../../components/Dialogs";
import Header from "../../components/Header";
import Messages from "../../components/Messages";
import {useAppDispatch} from "../../hook";
import {addMessage} from "../../redux/slices/messagesSlice";


const Home = () => {
    const [text, setText] = useState('')
    const dispatch = useAppDispatch()

    const sendMessage = () => {
        dispatch(addMessage(text))
    }

    return (
        <div className={classes.homeContainer}>
            <Header/>
            <div className={classes.mess}>
                <Dialogs />
                <div className={classes.content}>
                    <Messages />
                    <div className={classes.message}>
                        <div className={classes.input}>
                            <Input
                                value={text}
                                placeholder="Введите сообщение"
                                onChange={(e) => setText(e.target.value)}
                            />
                        </div>
                        <div className={classes.icons}>
                            <CameraOutlined/>
                            <AudioOutlined/>
                            <SendOutlined onClick={sendMessage}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home