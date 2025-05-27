import React, { useRef, useState } from 'react';
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
    const name = useRef(null);
    const surname = useRef(null);
    const phone = useRef(null);
    const email = useRef(null);
    const [validName, setValidName] = useState(false);
    const [validSurname, setValidSurname] = useState(false);
    const [validPhone, setValidPhone] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [showError, setShowError] = useState(false);
    function handlePhoneNum() {
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone.current.value);
    }
    function handleEmail() {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.current.value);
    }
    function handleName() {
        return /^[a-zA-Zа-яА-ЯіІїЇєЄ\']{2,}$/.test(name.current.value);
    }
    function handleSurname() {
        return /^[a-zA-Zа-яА-ЯіІїЇєЄ\']{1,}$/.test(surname.current.value);
    }
    function onNameChange() {
        setValidName(handleName());
    }

    function onSurnameChange() {
        setValidSurname(handleSurname());
    }

    function onPhoneChange() {
        setValidPhone(handlePhoneNum());
    }

    function onEmailChange() {
        setValidEmail(handleEmail());
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (validName === true && validSurname === true && validPhone === true && validEmail === true) {
            setShowError(false);
            alert(`Вхід виконано!`);
        }
        else {
            console.log("Name: ", validName);
            console.log("Surname: ", validSurname);
            console.log("Phone: ", validPhone);
            console.log("Email: ", validEmail);
            setShowError(true);
        }
    }
    return <div className='wrapper' style={{ width: '74.16vw', marginTop: '0.651vw' }} id='profileWrapper'>
        <ProfileNav></ProfileNav>
        <section style={{ marginBottom: '5.677vw' }}>
            <h2 style={{ color: '#3C3C3B', margin: '0' }}>Профіль</h2>
            <div className='personalData'>
                <img src='/tabler-icon-user-grey.png' className='imgIconUserGrey' alt='iconUserGrey' style={{ marginRight: '0.52vw' }}></img>
                <p style={{ margin: '0', lineHeight: '1vw' }}>Особисті дані</p>
            </div>
            <form style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <div style={{ position: 'relative' }}>
                    <label id='nameLabel' for="#name">Ім’я <span style={{ color: '#B53535' }}>*</span></label>
                    <input type='text' className='formInput' placeholder="Ім'я" id='name' ref={name} onChange={onNameChange} required></input>
                </div>
                <input type='text' className='formInput' placeholder='Прізвище' id='surname' ref={surname} onChange={onSurnameChange} required></input>
                <input type='tel' className='formInput' placeholder='+380 (861 111-111) 01' id='phone' ref={phone} onChange={onPhoneChange} required></input>
                <input type='email' className='formInput' placeholder='Електронна пошта' id='email' ref={email} onChange={onEmailChange} required></input>
                <div>
                    <p style={{ fontSize: '0.677vw', margin: '0 0 0.52vw 0', color: '#B53535', display: showError ? 'block' : 'none' }} className='checkInput'>*Перевірте правильність введених даних.</p>
                    <button className='saveButton' onClick={handleSubmit}> Зберегти </button>
                </div>
            </form>
        </section>
    </div>

}

export function Subscribe() {
    const email = useRef(null);
    const [validEmail, setValidEmail] = useState(false);
    const [showError, setShowError] = useState(false);
    function handleEmail() {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.current.value);
    }
    function onEmailChange() {
        setValidEmail(handleEmail());
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (validEmail === true) {
            setShowError(false);
            alert(`Підписку оформлено!`);
        }
        else {
            console.log("Email: ", validEmail);
            setShowError(true);
        }
    }
    return <section className='wrapper' style={{ width: '74.16vw' }} id='subscription'>
        <div className='subscribeBlock' style={{ display: 'block' }}>
            <p className='subTitle' style={{ color: '#3C3C3B', margin: '0' }}>Підписуйтесь на знижки та рекомендації</p>
            <p className='inputText' style={{ color: '#3C3C3B', margin: '0' }}>Не турбуйтесь, ніякого спаму та нав’язливої реклами ;)</p>
        </div>
        <form className='subscribeInputWrapper'>
            <div>
                <div className='subscribeGmail'>
                    <img src='/tabler-icon-mail.png' alt='iconGmail' className="iconGmail" id='iconGmail'></img>
                    <input type='email' className='subscribeInput' placeholder='Електронна пошта' ref={email} onChange={onEmailChange} required></input>
                </div>
                <p style={{ fontSize: '0.677vw', margin: '0.52vw 0 0 0', color: '#B53535', display: showError ? 'block' : 'none' }} className='checkInput'>*Перевірте правильність введених даних.</p>
            </div>

            <button className='subscribeButton' onClick={handleSubmit}>Підписатися</button>
        </form>
    </section>
}



export function Orders() {
    return <div className='wrapper' style={{ width: '74.16vw', marginTop: '0.651vw' }} id='profileWrapper'>
        <ProfileNav></ProfileNav>
        <section style={{ width: '74.16vw', marginBottom: '2.6vw' }}>
            <h2 style={{ color: '#3C3C3B' }} id='ordersH'>Мої замовлення</h2>
            <div id='ordersWrapper' style={{ marginTop: '1.718vw', margin: '0 auto', width: '18.3854vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img src='/ufo.png' alt='ufo image' style={{ width: '18.3854vw', margin: '0 0 1.25vw 0' }} id='orderUfo'></img>
                <p className='ordersText' style={{ fontSize: '1.25vw', margin: '0', color: '#000000' }} id='orderPTitle'>Список замовлень порожній</p>
                <p className='ordersText' style={{ fontSize: '0.652vw', margin: '0 0 0.52vw 0', color: '#3C3C3B' }} id='orderP'>Додайте товари в кошик та оформіть замовлення</p>
                <Link to='/' className='subscribeButton' style={{ width: '7.447vw', textDecoration: 'none', textAlign: 'center', paddingTop: '0.652vw' }} id='orderButton'>Прейти на головну</Link>
            </div>
        </section>
    </div>

}

export function Wishlist() {
    return <div className='wrapper' style={{ width: '74.16vw', marginTop: '0.651vw', marginBottom: '7.6vw' }} id='profileWrapper'>
        <ProfileNav></ProfileNav>
        <section style={{ width: '74.16vw', position: 'relative' }}>
            <h2 style={{ color: '#3C3C3B', margin: '0 0 0.78125vw 0' }}>Список бажаного</h2>
            <img src='/plus.png' alt='plus' style={{ width: ' 0.9375vw', position: 'absolute', top: '1.5625vw', left: '30vw', cursor: 'pointer' }} id='wishlistPlus'></img>
            <input className='wishlist' placeholder='Створити новий список'></input>
        </section>
    </div>
}

export function Contact(props) {
    return <a href={props.href} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', cursor: 'pointer', textDecoration: 'none', color: '#3C3C3B' }}>
        <img src={props.image} alt={props.image} style={{ width: '2.6vw', margin: '0' }} className='contactImage'></img>
        <p className='contactText' style={{ margin: '0.3125vw 0 0 0' }}>{props.text}</p>
    </a>

}

export function Authorize() {
    return <section style={{ width: '79.16vw', margin: '5.781vw auto 5.729vw auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.25vw', color: '#3C3C3B', margin: '0 0 2.3437vw 0' }} id='authorizeTitle'>Авторизуйтесь або зареєструйтесь, щоб оформляти замовлення, додавати товари у бажане та залишати відгуки.</h3>
        <div style={{ width: '17.18vw', display: 'flex', justifyContent: 'space-between' }} id='contactsWrapper'>
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
        <Path width='74.16vw' mTop='0'></Path>
        <Outlet />
        <Subscribe></Subscribe>
        <Footer></Footer>

    </>
}