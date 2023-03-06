import React from "react";
import classes from "./LoginForm.module.scss";
import {Button, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

//components
import {Link} from "react-router-dom";


const LoginForm = () => {

    return (
        <div className={classes.container}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите логин!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Введите логин"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста введите пароль!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon"/>}
                        type="password"
                        placeholder="Введите пароль"
                    />
                </Form.Item>
                <div className={classes.loginButtons}>
                    <Link to="/register">Зарегистрироваться</Link>
                    <Button type="primary" htmlType="submit">Войти</Button>
                </div>

            </Form>
        </div>

    )
}

export default LoginForm