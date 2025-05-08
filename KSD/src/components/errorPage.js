import React from "react";
import { Link } from 'react-router-dom';

export function NotFound() {
    return <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center'}}>
        <img src="/ufo.png" alt="ufo" style={{ marginBottom: '20px', width: '400px' }}></img>
        <h1 className="title" style={{ color: '#B53535', textTransform: 'uppercase', margin: '0' }}>Помилка 404: сторінку не знайдено</h1>
        <p style={{ color: '#686868', margin: '8px 0 32px 0' }}>Здається, щось пішло не так...</p>
        <Link to='/' className="highlightedNav" style={{fontSize: '28px', lineHeight: '28px', paddingTop: '18px', textAlign: 'center'}}>Повернутися на головну</Link>
    </main>
}