import React from 'react';
import {Form, Input, Select,} from 'antd';
import classes from './RegisterForm.module.scss'
import Button from "../../ui/Button";

const {Option} = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};


const RegisterForm = () => {
    const [form] = Form.useForm();
    // const onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    // };

    return (
        <div className={classes.container}>
            <Form
                {...formItemLayout}
                form={form}
                name="register"
                // onFinish={onFinish}
                initialValues={{
                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                    prefix: '86',
                }}
                scrollToFirstError
            >
                <Form.Item
                    name="surname"
                    label="Фамилия"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите фамилию!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="firstname"
                    label="Имя"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите имя!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="lastname"
                    label="Отчество"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите очество!',
                            whitespace: true,
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="role"
                    label="Роль"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, выберите роль!',
                        },
                    ]}
                >
                    <Select placeholder="Выберите роль">
                        <Option value="teacher">Преподаватель</Option>
                        <Option value="student">Студент</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="role"
                    label="Кафедра"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, выберите кафедру!',
                        },
                    ]}
                >
                    <Select placeholder="Выберите кафедру">
                        <Option value="0">Информатика и вычислительная техника</Option>
                        <Option value="1">Экономика</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="role"
                    label="Группа"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, выберите группу!',
                        },
                    ]}
                >
                    <Select placeholder="Выберите группу">
                        <Option value="0">ИВТ-2022</Option>
                        <Option value="1">Э-10-02</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'Введите корректный e-mail адрес!',
                        },
                        {
                            required: true,
                            message: 'Пожалуйста, введите e-mail! адрес!',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Пароль"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите пароль!',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Подтвердить пароль"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите пароль!',
                        },
                        ({getFieldValue}) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Пароли не совпадают!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item
                    name="phone"
                    label="Номер телефона"
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите номер телефона!',
                        },
                    ]}
                >
                    <Input
                        style={{
                            width: '100%',
                        }}
                    />
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    {/*<Button type="primary" htmlType="submit">Зарегистрироваться</Button>*/}
                </Form.Item>
                <Form.Item>
                    Назад
                </Form.Item>
            </Form>
        </div>

    );
};
export default RegisterForm;