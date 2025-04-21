import React from 'react';
import { Outlet, Link } from 'react-router-dom';

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
    return <main style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <section style={{ marginTop: '30px', position: 'relative' }}>
            <img src='forClientsPerson.png' alt='Person Standing' style={{ position: 'absolute', top: '80px', left: '-100px', zIndex: '2' }}></img>
            <h2 style={{ margin: '0', marginBottom: '30px' }}>Клієнтам КСД</h2>
            <div style={{ width: '952px', display: 'flex', justifyContent: 'space-between', marginLeft: '44px' }}>
                <ForClients image='coinIcon.png' altern='Pig Coin Image' title='КСДкоїни' text='Збирайте віртуальні монетки за кожне замовлення у КСД і обмінюйте на бонуси'></ForClients>
                <ForClients image='giftIcon.png' altern='Bonus Gift Image' title='Бонуси' text='Додаткова знижка на наступні покупки, читайте більше і заощаджуйте'></ForClients>
            </div>
        </section>
        <hr style={{ width: '1040px', backgroundColor: '#2C2C2C', marginTop: '61px' }}></hr>
    </main>
}