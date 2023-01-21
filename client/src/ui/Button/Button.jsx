import React from 'react'
import { Button as BaseButton } from 'antd'

import './Button.module.scss'

const Button = (props) => {
    return (
        <BaseButton
            {...props}
        />
    )
}

export default Button
