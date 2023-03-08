import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../redux/slices/authSlice'
import { useAppDispatch } from '../../hook'
import classes from './LoginForm.module.scss'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            await dispatch(loginUser({ email, password }))
            // navigate('/im')
        } catch (error) {
            return error
        }
    }

    return (
        <div className={classes.container}>
            <Form
                name='normal_login'
                className='login-form'
                initialValues={{
                    remember: true
                }}
                onFinish={handleSubmit}
            >
                <Form.Item
                    name='email'
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите логин!'
                        }
                    ]}
                >
                    <Input
                        prefix={
                            <UserOutlined className='site-form-item-icon' />
                        }
                        placeholder='Введите логин'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Item>
                <Form.Item
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите пароль!'
                        }
                    ]}
                >
                    <Input
                        prefix={
                            <LockOutlined className='site-form-item-icon' />
                        }
                        type='password'
                        placeholder='Введите пароль'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>
                <div className={classes.loginButtons}>
                    <Link to='/register'>Зарегистрироваться</Link>
                    <Button type='primary' htmlType='submit'>
                        Войти
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default LoginForm
