import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"

function Login() {

    const signIn = () => {
        //sign in stuff
    }

    return(
        <div className="login">
            <div className>
                <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRXwx9YllIJxWN7-aCjGXYFLB5jGpeAC1lQ&usqp=CAU"
                    alt="dog logo"/>
            </div>
        <Button type="submit" onClick={signIn}>Sign In</Button>
    
        </div>
    )
}

export default Login