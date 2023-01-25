import React from 'react'
import classes from './Home.module.scss'
import {Input} from "antd";
import {AudioOutlined, CameraOutlined, SendOutlined} from "@ant-design/icons";

//components
import Dialogs from "../../components/Dialogs";
import Header from "../../components/Header";
import Messages from "../../components/Messages";


const Home = () => {

    return (
        <div className={classes.homeContainer}>
            <Header/>
            <div className={classes.mess}>
                <div className={classes.sidebar}>
                    <Dialogs />
                </div>
                <div className={classes.content}>
                    <Messages />
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