import React from 'react'
import {Link} from 'react-router-dom'
import classes from './Header.module.scss'

const Header = () => {
    return <header className={classes.headerBlock}>
        <Link className={classes.headerLink} to='/profile'>Профиль</Link>
        <span>Выход</span>
    </header>
}

export default Header