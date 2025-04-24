import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navigation, News } from './main';

export function ForClients(props) {
    return <div style={{ width: '464px', height: '146px', borderRadius: '30px', border: '2px solid rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', padding: '14px 55px' }}>
        <img src={props.image} alt={props.altern}></img>
        <div style={{ width: '265px', marginLeft: '25px' }}>
            <p className='offerTitle' style={{ margin: '0', marginBottom: '10px' }}>{props.title}</p>
            <p className='small' style={{ margin: 0 }}>{props.text}</p>
        </div>
    </div>
}

function New() {
    return <div style={{ backgroundImage: "url('new.png')", backgroundRepeat: 'no-repeat', width: '1040px', height: '500px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
            <h2 style={{ color: 'white', margin: '0', marginBottom: '7px', textAlign: 'center' }}>Книжковий дайджест КСД</h2>
            <p style={{ fontSize: '36px', color: 'white', display: 'block', margin: '0', textAlign: 'center'}}>Ваша щомісячна порція новинок ;)</p>
            <div style={{ width: '274px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: '0 auto', marginTop: '30px', position: 'relative' }}>
                <img src='hand.png' alt='hand' style={{ marginBottom: '-100px', marginLeft: '170px',zIndex: 2 }} ></img>
                <button className='big' style={{ display: 'block', width: '274px', height: '60px', backgroundColor: '#FFFFFF', border: '2px solid #3C3C3B', outline: 'none', borderRadius: '60px' }}>Гортати</button>
            </div>
        </div>
    </div>
}

export function CarouselCard(props) {
    return <div className='carouselCard'>
        <p style={{fontSize: '14px', lineHeight: '12px', backgroundColor: '#B53535', color: '#FFFFFF', padding: '4px 14px', display: 'inline', borderRadius: '60px', zIndex: '2', position: 'absolute', marginTop: '-10px', marginLeft: '75px'}}>{props.special}</p>
        <img src={props.cover} alt='book cover'></img>
        <p style={{ color: '#B53535', margin: '0', height: '50px', display: 'flex', alignItems: 'flex-end' }}>{props.name}</p>
        <p style={{ color: '#686868', marginTop: '10px', marginBottom: '24px' }}>{props.author}</p>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <p style={{ color: '#3C3C3B', textDecoration: 'line-through #3C3C3B', margin: '0' }}>{props.oldPrice}</p>
            <p className='big' style={{ color: '#B53535', margin: '0' }}>{props.price} ГРН</p>

        </div>
    </div>
}

export function Home() {
    const news = [
        { image: 'news1.png', date: '1 травня 2024 р.', title: 'Купуйте книги, вибирайте доставку Укрпоштою', description: 'Час для вигідних покупок! Вартість доставки знижено! Детальніше ...', raters: '6', rating: '5.0' },
        { image: 'news2.png', date: '1 травня 2024 р.', title: 'Книжковий дайджест КСД: травневі новинки', description: 'Гортайте дайджест і вибирайте нові книжки до покупки. Нехай ці історії порадують вас весняними вечорами! ...', raters: '1', rating: '0.0' },
        { image: 'news3.png', date: '18 квітня 2024 р.', title: 'День книги та авторського права: подвоюємо КСДкоїни на честь свята!', description: 'Купуйте книжки і отримуйте подвоєні КСДкоїни. Більше книжок — більше коїнів. Лише до 24 квітня, поспішайте! ...', raters: '32', rating: '4.5' },
        { image: 'news4.png', date: '12 квітня 2024 р.', title: 'День книги та авторського права: подвоюємо КСДкоїни на честь свята!', description: 'Купуйте книжки і отримуйте подвоєні КСДкоїни. Більше книжок — більше коїнів. Лише до 24 квітня, поспішайте! ...', raters: '0' },
        { image: 'news5.png', date: '21 березня 2024 р.', title: 'Нам 24 роки! День народження КСД', description: 'Хапайте знижку і святкуйте разом з нами: -24% на всі книжки видавництва КСД! ...', raters: '10', rating: '5.0' }
    ]
    return <main>
        <div className='wrapper'>
            <Navigation></Navigation>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <New></New>
                <section style={{ marginTop: '30px', position: 'relative' }}>
                    <img src='forClientsPerson.png' alt='Person Standing' style={{ position: 'absolute', top: '80px', left: '-100px', zIndex: '2' }}></img>
                    <h2 style={{ margin: '0', marginBottom: '30px' }}>Клієнтам КСД</h2>
                    <div style={{ width: '952px', display: 'flex', justifyContent: 'space-between', marginLeft: '44px' }}>
                        <ForClients image='coinIcon.png' altern='Pig Coin Image' title='КСДкоїни' text='Збирайте віртуальні монетки за кожне замовлення у КСД і обмінюйте на бонуси'></ForClients>
                        <ForClients image='giftIcon.png' altern='Bonus Gift Image' title='Бонуси' text='Додаткова знижка на наступні покупки, читайте більше і заощаджуйте'></ForClients>
                    </div>
                    <hr style={{ width: '1040px', backgroundColor: '#2C2C2C', marginTop: '61px' }}></hr>
                </section>
                {/* <CarouselCard special='ЕКСКЛЮЗИВ!' cover='littleFriend.png' name='Маленький друг' author='Д. Тартт' oldPrice='450' price='410'></CarouselCard> */}
            </div>
        </div>
        <News top='307px' news={news}></News>
    </main>
}