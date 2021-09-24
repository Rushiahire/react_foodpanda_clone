import React ,{useState} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../images/logo.png';
import NavbarState from './NavbarState';

const NAVBAR = () =>{
    const [button_state,set_button_state]=useState(false);

    let id=100;

    const on_button_click =() =>{
        set_button_state(!button_state)
    }

    const navbar_links = [
        {
            link:'About',
            path:'/about'
        },
        {
            link:'Careers',
            path:'/careers'
        },
        {
            link:'Press',
            path:'/press'
        },
        {
            link:'Login',
            path:'/login'
        },
        {
            link:'sign up',
            path:'/signup'
        }
    ];

    let button_text = !button_state?'fa fa-bars':'fa fa-times';

    return (
        <>
            
        <div id="navbar">
        <NavLink exact to="/">
            <img src={logo} alt="logo"/>
        </NavLink>
            <button onClick={on_button_click} >
                <i className={button_text}></i>
            </button>
        <div>
        {
            navbar_links.map((nav_link)=>{
                return <NavLink key={id++} exact className="navbar_link" activeClassName="navbar_Link_active" to={nav_link.path} > 
                {nav_link.link} </NavLink>
            })
        }
    </div>
    </div>
        <NavbarState nav_links = {navbar_links} nav_state = {button_state}/>
        </>
    );
}

export default NAVBAR;