import React from 'react'
import {Routes, Route} from "react-router-dom";

//components
import NotFound from "../NotFound";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";

const Auth = () => {
    return (
        <Routes>
            <Route path='/' element={ <LoginForm />} />
            <Route path='/register' element={<RegisterForm />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default Auth