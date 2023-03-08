import React, { useState } from 'react'
import { Button, Form, Input, Select } from 'antd'
import { useNavigate } from 'react-router-dom'
import { registerUser } from '../../redux/slices/authSlice'
import { useAppDispatch } from '../../hook'
import classes from './RegisterForm.module.scss'

const { Option } = Select

const RegisterForm = () => {
    const [surName, setSurName] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [role, setRole] = useState('')
    const [department, setDepartment] = useState('')
    const [group, setGroup] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phone, setPhone] = useState('')

    const dispatch = useAppDispatch()
    const [form] = Form.useForm()
    const navigate = useNavigate()

    const goBack = () => navigate(-1)

    const handleSubmit = async () => {
        try {
            const userData = {
                surName,
                lastName,
                firstName,
                role,
                department,
                group,
                email,
                password,
                phone
            }
            await dispatch(registerUser(userData))
            // navigate('/im')
        } catch (error) {
            return error
        }
    }

    return (
        <div className={classes.container}>
            <Form
                form={form}
                name='register'
                scrollToFirstError
                onFinish={handleSubmit}
            >
                <Form.Item
                    name='surName'
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите фамилию!',
                            whitespace: true
                        }
                    ]}
                >
                    <Input
                        value={surName}
                        onChange={(e) => setSurName(e.target.value)}
                        placeholder='Введите фамилию'
                    />
                </Form.Item>
                <Form.Item
                    name='firstname'
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите имя!',
                            whitespace: true
                        }
                    ]}
                >
                    <Input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='Введите имя'
                    />
                </Form.Item>
                <Form.Item
                    name='lastname'
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите очество!',
                            whitespace: true
                        }
                    ]}
                >
                    <Input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder='Введите очество'
                    />
                </Form.Item>
                <Form.Item
                    name='role'
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, выберите роль!'
                        }
                    ]}
                >
                    <Select
                        placeholder='Выберите роль'
                        value={role}
                        onChange={(value) => setRole(value)}
                    >
                        <Option value='Преподаватель'>Преподаватель</Option>
                        <Option value='Студент'>Студент</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='department'
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, выберите кафедру!'
                        }
                    ]}
                >
                    <Select
                        placeholder='Выберите кафедру'
                        value={department}
                        onChange={(value) => setDepartment(value)}
                    >
                        <Option value='Информатика и вычислительная техника'>
                            Информатика и вычислительная техника
                        </Option>
                        <Option value='1'>Экономика</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='group'
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, выберите группу!'
                        }
                    ]}
                >
                    <Select
                        placeholder='Выберите группу'
                        value={group}
                        onChange={(value) => setGroup(value)}
                    >
                        <Option value='ИВТ-2022'>ИВТ-2022</Option>
                        <Option value='Э-10-02'>Э-10-02</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name='email'
                    rules={[
                        {
                            type: 'email',
                            message: 'Введите корректный e-mail адрес!'
                        },
                        {
                            required: true,
                            message: 'Пожалуйста, введите e-mail! адрес!'
                        }
                    ]}
                >
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Введите email'
                    />
                </Form.Item>
                <Form.Item
                    name='password'
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите пароль!'
                        }
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Введите пароль'
                    />
                </Form.Item>
                <Form.Item
                    name='confirm'
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите пароль!'
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue('password') === value
                                ) {
                                    return Promise.resolve()
                                }
                                return Promise.reject(
                                    new Error('Пароли не совпадают!')
                                )
                            }
                        })
                    ]}
                >
                    <Input.Password
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder='Повторите пароль'
                    />
                </Form.Item>
                <Form.Item
                    name='phone'
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, введите номер телефона!'
                        }
                    ]}
                >
                    <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder='Введите номер телефона'
                    />
                </Form.Item>

                <div className={classes.registerButtons}>
                    <Button type='primary' htmlType='submit'>
                        Зарегистрироваться
                    </Button>
                    <Button onClick={goBack}>Отмена</Button>
                </div>
            </Form>
        </div>
    )
}
export default RegisterForm
