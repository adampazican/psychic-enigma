import React from 'react'
import style from './LoginForm.css'

export default ({ hidden }) => (
    <div className={ hidden === 'true' ? style.hidden : style.loginForm}>
        <div className={style.triangle}></div>
        <form>
            <legend>Login</legend>
            <div>
                <input type="text" id="name" name="user_name" placeholder="UserName" />
            </div>
            <div>
                <input type="password" id="password" name="password" placeholder="Password" />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    </div>
)