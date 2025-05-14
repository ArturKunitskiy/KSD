import React from "react";
import { Link } from 'react-router-dom';

export function NotFound() {
    return <main style={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center'}}>
        <img src="/ufo.png" alt="ufo" id="ufo"></img>
        <h1 className="title" style={{ color: '#B53535', textTransform: 'uppercase', margin: '0' }}>Помилка 404: сторінку не знайдено</h1>
        <p style={{ color: '#686868', margin: '0.42vw 0 1.66vw 0' }}>Здається, щось пішло не так...</p>
        <Link to='/' className="highlightedNav" style={{fontSize: '1.46vw', lineHeight: '1.46vw', paddingTop: '0.9375vw', textAlign: 'center'}}>Повернутися на головну</Link>
    </main>
}