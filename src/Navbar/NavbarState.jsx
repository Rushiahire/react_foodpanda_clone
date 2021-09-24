import React from 'react';
import {NavLink} from 'react-router-dom';


const NavbarState = (props) =>{
    let id = 1100;
    if(props.nav_state){
        return(
            <ul id="nav_resp">
            {
                props.nav_links.map((navlink)=>{
                    return(
                        <li key={id++} >
                            <NavLink exact className="navbar_link_resp" activeClassName="navbar_Link_active" to={navlink.path} >
                                {
                                    navlink.link 
                                }
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
        )
    }
    return <> </>
}

export default NavbarState;