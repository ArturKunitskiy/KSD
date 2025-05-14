import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ScrollingText, Header, Footer, Category, News, ResentlyViewed, Path } from './main';

export function CartCategory(props) {
    return <Link to={props.link} style={{ color: props.color, backgroundColor: props.background, width: '39.16vw', height: '3.23vw', borderRadius: '60px', border: 'none', outline: 'none', padding: '0.72916vw 1.5625vw', cursor: 'pointer', textDecoration: 'none', textAlign: 'center' }}>
        <p className='big' style={{ margin: '0' }}>{props.text}</p>
    </Link>
}

export function CartNav(props) {
    return <div className='wrapper'>
        <CartCategory link='/Cart' text='Фізичні товари' color={props.firstColor} background={props.firtsBackground}></CartCategory>
        <CartCategory link='/Cart/Digital' text='Електронні товари' color={props.secondColor} background={props.secondBackground}></CartCategory>
    </div>
}

export function AddToCart(props) {
    return <button style={{ border: '1px solid #B53535', height: '2.6041vw', borderRadius: '0.52vw', cursor: 'pointer', marginLeft: props.mLeft, marginRight: props.mRight, backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', padding: '0 0 0 0.52vw', width: '9.3678vw' }} className='cartButton'>
        <img src={props.image} alt='cart icon' style={{ marginRight: '0.5vw', width: '1.614vw' }}></img>
        <p className='cartButtonP'>{props.text}</p>
    </button>
}

export function EmptyCart(props) {
    return <div className='emptyCart'>
        <h3 style={{ color: '#2C2C2C', marginTop: '4vw', marginBottom: '0.72916vw' }}>У Вашому «Кошику» ще немає жодного товару.</h3>
        <p className='small' style={{ color: '#686868', padding: '0.52vw', margin: '0' }}>Щоб додати будь-який товар до «Кошика», необхідно натиснути на кнопку <span style={{display: 'inline-block', verticalAlign: 'middle'}}><AddToCart text={props.text} image={props.image} mLeft='0.52vw' mRight='0.52vw' /></span> , яка розташована поруч з обраним Вами товаром.</p>
        <p style={{ color: '#2C2C2C', margin: '0.677vw 0 1.2wv 0' }}>Товарні розділи нашого магазину:</p>
        <ul style={{ color: '#2C2C2C', margin: '0 0 1.875vw 0' }}>
            <li>Книги</li>
            <li>Електронні книги</li>
            <li>Спецпропозиції</li>
        </ul>
        <p className='big' style={{ color: '#B53535', margin: '0' }}>Бажаємо приємних покупок!</p>
    </div>
}

export function PsysicalCart() {
    return <>
        <CartNav firstColor='#FFFFFF' firtsBackground='#B53535' secondColor='#4F4F4F' secondBackground='#D6D9DC'></CartNav>
        <EmptyCart text='До кошика' image='/cartIcon.png'></EmptyCart>
    </>
}
export function DigitalCart() {
    return <>
        <CartNav firstColor='#4F4F4F' firtsBackground='#D6D9DC' secondColor='#FFFFFF' secondBackground='#B53535'></CartNav>
        <EmptyCart text='Придбати' image='/digitalCartIcon.png'></EmptyCart>

    </>
}

export function Cart() {
    const news = [
        { image: '/news1.png', date: '1 травня 2024 р.', title: 'Купуйте книги, вибирайте доставку Укрпоштою', description: 'Час для вигідних покупок! Вартість доставки знижено! Детальніше ...', raters: '6', rating: '5.0', link: '/News1' },
        { image: '/news2.png', date: '1 травня 2024 р.', title: 'Книжковий дайджест КСД: травневі новинки', description: 'Гортайте дайджест і вибирайте нові книжки до покупки. Нехай ці історії порадують вас весняними вечорами! ...', raters: '1', rating: '0.0', link: '/News2' },
        { image: '/news3.png', date: '18 квітня 2024 р.', title: 'День книги та авторського права: подвоюємо КСДкоїни на честь свята!', description: 'Купуйте книжки і отримуйте подвоєні КСДкоїни. Більше книжок — більше коїнів. Лише до 24 квітня, поспішайте! ...', raters: '32', rating: '4.5', link: '/News3' },
        { image: '/news4.png', date: '12 квітня 2024 р.', title: 'День книги та авторського права: подвоюємо КСДкоїни на честь свята!', description: 'Купуйте книжки і отримуйте подвоєні КСДкоїни. Більше книжок — більше коїнів. Лише до 24 квітня, поспішайте! ...', raters: '0', link: '/News4' },
        { image: '/news5.png', date: '21 березня 2024 р.', title: 'Нам 24 роки! День народження КСД', description: 'Хапайте знижку і святкуйте разом з нами: -24% на всі книжки видавництва КСД! ...', raters: '10', rating: '5.0', link: '/News5' }
    ]
    return <>
        <ScrollingText />
        <Header></Header>
        <div className='wrapper'>
            <Category link='#' name='Художні'></Category>
            <Category link='#' name='Прикладні'></Category>
            <Category link='#' name='Дитячі'></Category>
            <Category link='#' name='Спецпропозиції'></Category>
            <Category link='#' name='eBooks'></Category>
            <Category link='#' name='Анонси КСД'></Category>
        </div>
        <Path width='79.16vw' mTop='1.25vw'></Path>
        <Outlet></Outlet>
        <News top='4.7916vw' news={news}></News>
        <ResentlyViewed></ResentlyViewed>
        <Footer></Footer>

    </>
}
