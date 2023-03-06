import React from 'react'
import { Routes, Route } from 'react-router-dom'

//components
import NotFound from '../NotFound'
import LoginForm from '../../components/LoginForm'
import RegisterForm from '../../components/RegisterForm'
import Home from '../HomePage'

const Auth = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='/im' element={<Home />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Auth