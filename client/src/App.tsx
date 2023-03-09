import React from 'react'

//components
import {Route, Routes} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Home from './pages/HomePage'
import NotFound from './pages/NotFound'
import ProfilePage from './pages/ProfilePage'
import Layout from './components/Layout'

const App = () => {
    return (
        <div className='App'>
            <Routes>
                <Route path='/login' element={<LoginForm />}/>
                <Route path='/register' element={<RegisterForm />}/>
                <Route path='/' element={<Layout />}>
                    <Route path='/im' element={<Home />}/>
                    <Route path='/profile' element={<ProfilePage />} />
                    <Route path='*' element={<NotFound />}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App
