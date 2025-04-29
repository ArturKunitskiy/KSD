import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ScrollingText, Header, Footer } from './main';
import '../profile.css'
import { Path } from './main';

export function ProfileNav() {
    return <div className='profileContainer'>
        <div className='profileNav'>
            <Link to='/Profile/' className='profileNavItem'>
                <img src='/tabler-icon-user.png' alt='iconUser' className='profileNavIcon' />
                <p className='profileNavText'>Профіль</p>
            </Link>

            <Link to='/Profile/Orders' className='profileNavItem'>
                <img src='/tabler-icon-clipboard-list.png' alt='iconClipboard' className='profileNavIcon' />
                <p className='profileNavText'>Мої замовлення</p>
            </Link>

            <Link to='/Profile/Wishlist' className='profileNavItem'>
                <img src='/tabler-icon-heart.png' alt='iconHeart' className='profileNavIcon' />
                <p className='profileNavText'>Список бажаного</p>
            </Link>

            <Link to='/Profile/Authorize' className='profileNavItem'>
                <img src='/tabler-icon-logout.png' alt='iconLogout' className='profileNavIcon' />
                <p className='profileNavText'>Вихід</p>
            </Link>
        </div>
    </div>
}

export function MyProfile() {
    return <div className='wrapper' style={{ width: '1424px', marginTop: '12.5px' }}>
        <ProfileNav></ProfileNav>
        <section style={{ marginBottom: '109px' }}>
            <h2 style={{ color: '#3C3C3B', margin: '0' }}>Профіль</h2>
            <div className='personalData'>
                <img src='/tabler-icon-user-grey.png' className='imgIconUserGrey' alt='iconUserGrey' style={{ marginRight: '10px' }}></img>
                <p style={{ margin: '0', lineHeight: '20px' }}>Особисті дані</p>
            </div>
            <form style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div style={{ position: 'relative' }}>
                    <label id='nameLabel' for="#name">Ім’я <span style={{ color: '#B53535' }}>*</span></label>
                    <input type='text' className='formInput' placeholder="Ім'я" id='name'></input>
                </div>

                <input type='text' className='formInput' placeholder='Прізвище'></input>
                <input type='tel' className='formInput' placeholder='+380 (861 111-111) 01'></input>
                <input type='email' className='formInput' placeholder='Електронна пошта'></input>
                <button className='saveButton'> Зберегти </button>
            </form>
        </section>
    </div>

}

export function Subscribe() {
    return <section className='wrapper' style={{ width: '1424px' }}>
        <div className='subscribeBlock' style={{ display: 'block' }}>
            <p className='subTitle' style={{ color: '#3C3C3B', margin: '0' }}>Підписуйтесь на знижки та рекомендації</p>
            <p className='inputText' style={{ color: '#3C3C3B', margin: '0' }}>Не турбуйтесь, ніякого спаму та нав’язливої реклами ;)</p>
        </div>
        <div className='subscribeInputWrapper'>
            <form className='subscribeGmail'>
                <img src='/tabler-icon-mail.png' alt='iconGmail' className="iconGmail"></img>
                <input type='email' className='subscribeInput' placeholder='Електронна пошта'></input>
            </form>
            <button className='subscribeButton'>Підписатися</button>
        </div>
    </section>
}



export function Orders() {
    return <div className='wrapper' style={{ width: '1424px', marginTop: '12.5px' }}>
        <ProfileNav></ProfileNav>
        <section style={{ width: '1424px', marginBottom: '50px' }}>
            <h2 style={{ color: '#3C3C3B' }}>Мої замовлення</h2>
            <div style={{ marginTop: '33px', margin: '0 auto', width: '353px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src='/ufo.png' alt='ufo image' style={{ width: '353px', margin: '0 0 24px 0' }}></img>
                <p className='ordersText' style={{ fontSize: '24px', margin: '0', color: '#000000' }}>Список замовлень порожній</p>
                <p className='ordersText' style={{ fontSize: '12px', margin: '0 0 10px 0', color: '#3C3C3B' }}>Додайте товари в кошик та оформіть замовлення</p>
                <Link to='/' className='subscribeButton' style={{ width: '143px', textDecoration: 'none', textAlign: 'center', paddingTop: '12px' }}>Прейти на головну</Link>
            </div>
        </section>
    </div>

}

export function Wishlist() {
    return <div className='wrapper' style={{ width: '1424px', marginTop: '12.5px', marginBottom: '146px' }}>
        <ProfileNav></ProfileNav>
        <section style={{ width: '1424px', position: 'relative' }}>
            <h2 style={{ color: '#3C3C3B', margin: '0 0 15px 0' }}>Список бажаного</h2>
            <img src='/plus.png' alt='plus' style={{ width: '18px', position: 'absolute', top: '44px', left: '576px', cursor: 'pointer' }}></img>
            <input className='wishlist' placeholder='Створити новий список'></input>
        </section>
    </div>
}

export function Contact(props) {
    return <a href={props.href} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', cursor: 'pointer', textDecoration: 'none', color: '#3C3C3B' }}>
        <img src={props.image} alt={props.image} style={{ width: '50px', margin: '0' }}></img>
        <p className='contactText' style={{ margin: '6px 0 0 0' }}>{props.text}</p>
    </a>

}

export function Authorize() {
    return <section style={{ width: '1520px', margin: '111px auto 110px auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ fontSize: '24px', color: '#3C3C3B', margin: '0 0 45px 0' }}>Авторизуйтесь або зареєструйтесь, щоб оформляти замовлення, додавати товари у бажане та залишати відгуки.</h3>
        <div style={{ width: '330px', display: 'flex', justifyContent: 'space-between' }}>
            <Contact image='/tg.png' text='Telegram' href='https://web.telegram.org'></Contact>
            <Contact image='/viber.png' text='Viber' href='https://www.viber.com'></Contact>
            <Contact image='/sms.png' text='SMS'></Contact>
        </div>
    </section>
}

export function Profile() {
    return <>
        <ScrollingText />
        <Header></Header>
        {/* <Path width='1424px' mTop='0'></Path> */}
        <Outlet />
        <Subscribe></Subscribe>
        <Footer></Footer>

    </>
}