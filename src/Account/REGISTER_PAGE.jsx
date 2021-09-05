import React, { useState } from 'react';

const REGISTER_PAGE = () => {
    const [input_value,set_input_value] =useState(
        {
            username : '',
            email : '',
            contact : '',
            password : '',
        }
    );

    const on_change_event  =(event) =>{
        const {name,value} = event.target;
        set_input_value((previous_value)=>{
            return{
                ...previous_value,
                [name]:value
            }
        })
        }

        return(
            <>
            <form action="" className="account_form">
                <h1>Sign up</h1>
                <label htmlFor="">Name : 
                <input type="text" 
                name="username" 
                id="username"
                autoComplete="off"
                value={input_value.username}
                onChange={on_change_event}
                required
                />
                </label>

                <label htmlFor="">Email : 
                <input type="text" 
                name="email" 
                id="email"
                autoComplete="off"
                value={input_value.email}
                onChange={on_change_event}
                required
                />
                </label>

                <label htmlFor="">Contact :
                <input type="text" 
                name="contact" 
                id="contact"
                autoComplete="off"
                value={input_value.contact}
                onChange={on_change_event}
                required
                />
                </label>

                <label htmlFor="">Password : 
                <input type="text" 
                name="password" 
                id="password"
                autoComplete="off"
                value={input_value.password}
                onChange={on_change_event}
                required
                />
                </label>
                
                <button type="submit">sign up</button>
            </form>
        </>
    )
}
export default REGISTER_PAGE;