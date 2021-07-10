import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import { auth, provider } from '../firebase'
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'

const Login = () => {
    const [{}, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
        })
        .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://www.leafsoftwaresolutions.com/uploads/8/7/0/2/87024912/microsoft-teams_orig.png" alt="Teams" />
                <div className="login__text">
                <h1 style={{color: "Navy"}}>Sign in to Teams!</h1>
                </div> 
                <Button onClick={signIn}>Sign In with Google</Button>
            </div>
        </div>
    )
}

export default Login
