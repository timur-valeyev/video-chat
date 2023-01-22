import React from 'react'
import classes from './Home.module.scss'
import {Input} from "antd";
import {AudioOutlined, CameraOutlined, SendOutlined} from "@ant-design/icons";
//components
import Message from "../../components/Message";
import Dialogs from "../../components/Dialogs";
import Header from "../../components/Header";


const Home = () => {

    return (
        <div className={classes.homeContainer}>
            <Header/>
            <div className={classes.mess}>
                <div className={classes.sidebar}>
                    <Dialogs />
                </div>
                <div className={classes.content}>
                    <div className={classes.messages}>
                        <Message avatar='https://cdn.freelance.ru/images/att/1575043_900_600.png' text='Hello'
                                 isMe={true} date='Вчера' isReaded/>
                        <Message avatar='https://cdn.freelance.ru/images/att/1575043_900_600.png' text='Hello'/>
                        <Message avatar='https://cdn.freelance.ru/images/att/1575043_900_600.png' isTyping/>
                    </div>
                    <div className={classes.message}>
                        <div className={classes.input}>
                            <Input placeholder="Введите сообщение"/>
                        </div>
                        <div className={classes.icons}>
                            <CameraOutlined/>
                            <AudioOutlined/>
                            <SendOutlined/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home