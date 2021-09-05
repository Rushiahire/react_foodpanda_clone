import React from 'react';
import { Switch,Route } from 'react-router-dom';
import Navbar from './Navbar/NAVBAR'
import HomePage from './Home/HOMEPAGE';
import About from './About/ABOUT';
import Careers from './Careers/CAREERS';
import Press from './Press/PRESS';
import Login_page from './Account/LOGIN_PAGE';
import Register_page from './Account/REGISTER_PAGE';
import Error from './Error'
import Footer from './Footer/FOOTER';



const App = ()=>{

    let id=200;

    const app_routs = [
        {
            path:'/',
            element : HomePage,
        },
        {
            path:'/about',
            element : About
        },
        {
            path:'/careers',
            element : Careers
        },
        {
            path:'/press',
            element : Press
        },
        {
            path:'/login',
            element : Login_page
        },
        {
            path : '/signup',
            element : Register_page
        }
    ];

    return (
        <>
            <Navbar/>
            <Switch>
                {
                    app_routs.map((route)=>{
                        return <Route key={id++} exact path={route.path} component={route.element}/>
                    })
                }
                <Route component={Error} />
            </Switch>
            <Footer/>
                
        </>
    );
}

export default App;