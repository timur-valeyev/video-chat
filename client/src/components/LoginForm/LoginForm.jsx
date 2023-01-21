import React from "react";
import classes from "./LoginForm.module.scss";
import {Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";

//components
import Button from "../../ui/Button";


const LoginForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    return (
        <div className={classes.container}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
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

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
                {/*<Form.Item>*/}
                {/*    <Link href="">Зарегистрироваться</Link>*/}
                {/*</Form.Item>*/}
            </Form>
        </div>

    )
}

export default LoginForm