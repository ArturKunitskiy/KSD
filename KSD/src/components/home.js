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
                <section style={{ marginTop: '30px', position: 'relative' }}>
                    <img src='forClientsPerson.png' alt='Person Standing' style={{ position: 'absolute', top: '80px', left: '-100px', zIndex: '2' }}></img>
                    <h2 style={{ margin: '0', marginBottom: '30px' }}>Клієнтам КСД</h2>
                    <div style={{ width: '952px', display: 'flex', justifyContent: 'space-between', marginLeft: '44px' }}>
                        <ForClients image='coinIcon.png' altern='Pig Coin Image' title='КСДкоїни' text='Збирайте віртуальні монетки за кожне замовлення у КСД і обмінюйте на бонуси'></ForClients>
                        <ForClients image='giftIcon.png' altern='Bonus Gift Image' title='Бонуси' text='Додаткова знижка на наступні покупки, читайте більше і заощаджуйте'></ForClients>
                    </div>
                    <hr style={{ width: '1040px', backgroundColor: '#2C2C2C', marginTop: '61px' }}></hr>
                </section>
            </div>
        </div>
        <News top='307px' news={news}></News>
    </main>
}