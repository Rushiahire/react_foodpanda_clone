import React, { useState } from 'react';

const Login_page = ()=>{
    const [input_value,set_input_value]=useState(
        {
            username : '',
            password : ''
        }
    );
    
    const on_change_event =(event) =>{
        // const name = event.target.name
        // const value = event.target.value
        const{name,value} = event.target;

        set_input_value((previous_value)=>{
            return{
                ...previous_value,
                [name] : value
            }
        })
    }

    return(
        <>
            <form action="" className="account_form">
                <h1>Login</h1>
                <label htmlFor="#">Username :     
                <input type="text" 
                name="username" 
                autoComplete="off" 
                value={input_value.username}
                onChange={on_change_event} 
                required />
                </label>

                <label htmlFor="#">Password : 
                <input type="password" 
                name="password" 
                id="password" 
                autoComplete="off" 
                value={input_value.password} 
                onChange={on_change_event} 
                required />
                </label>
                <button type="submit">Submit</button>

            </form>
        </>
    )
}

export default Login_page;

