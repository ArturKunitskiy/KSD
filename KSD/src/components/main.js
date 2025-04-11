import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export function ScrollingText() {
    return <div className='scrolling'>
        <div className='scroll'>
            <div className='leftToRight'>
                <p>Безкоштовно* від 790 грн</p>
                <p>Безкоштовно* від 790 грн</p>
                <p>Безкоштовно* від 790 грн</p>
                <p>Безкоштовно* від 790 грн</p>
                <p>Безкоштовно* від 790 грн</p>
                <p>Безкоштовно* від 790 грн</p>
                <p>Безкоштовно* від 790 грн</p>
                <p>Безкоштовно* від 790 грн</p>
                <p>Безкоштовно* від 790 грн</p>
                <p>Безкоштовно* від 790 грн</p>
                <p>Безкоштовно* від 790 грн</p>
                <p>Безкоштовно* від 790 грн</p>
                <p>Безкоштовно* від 790 грн</p>
            </div>
        </div>
    </div>
}

export function Header() {
    return <header>
        <Link to='/' style={{width: '245px'}}><img src='logo.png' alt='logo' /></Link>
        <div className='search'>
            <input type='text' placeholder='Пошук товарів, категорій' />
            <button style={{width: '48px', height: '48px', backgroundColor: '#B53535', borderRadius: '50%', border: 'none', cursor: 'pointer'}}><img src='search.png' alt='search icon' style={{width: '18px', height: '18px'}}/></button>
        </div>
        <div>
            <Link to='/Profile/MyProfile' style={{marginRight: '14px', display: 'inline-block', width: '30px', height: '30px'}}><img src='user.png' alt='user icon'/></Link>
            <Link to='/Cart' style={{display: 'inline-block', width: '30px', height: '30px'}}><img src='cart.png' alt='cart icon' /></Link>
        </div>

    </header>
}

export function MainPage() {
    return <>
        <ScrollingText />
        <Header></Header>
        <Outlet />
    </>
}