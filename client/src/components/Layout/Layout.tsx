import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../Header'
import classes from './Layout.module.scss'

const Layout = () => {
    return (
        <div className={classes.container}>
            <header className={classes.chatHeader}>
                <Header/>
            </header>
            <Outlet/>
        </div>
    )
}

export default Layout