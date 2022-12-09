import React from 'react'
import classes from './Home.module.scss'
import Message from "../../components/Message";

const Home = () => {
    return (
        <div className={classes.homeContainer}>
            <Message avatar='https://cdn.freelance.ru/images/att/1575043_900_600.png' text='Hello' isMe={true}/>
            <Message avatar='https://cdn.freelance.ru/images/att/1575043_900_600.png' text='Hello' />
        </div>
    )
}

export default Home