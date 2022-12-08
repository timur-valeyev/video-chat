import React from 'react'
import classes from './Block.module.scss'

const Block = ({children}) => {
    return (
        <div className={classes.container}>
            {children}
        </div>
    )
}

export default Block
