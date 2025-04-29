import React, { useEffect, useRef } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navigation, News } from './main';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';
import { ResentlyViewed } from './main';

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
            <p style={{ fontSize: '36px', color: 'white', display: 'block', margin: '0', textAlign: 'center' }}>Ваша щомісячна порція новинок ;)</p>
            <div style={{ width: '274px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', margin: '0 auto', marginTop: '30px', position: 'relative' }}>
                <img src='/hand.png' alt='hand' style={{ marginBottom: '-100px', marginLeft: '170px', zIndex: 2 }} ></img>
                <button className='big' style={{ display: 'block', width: '274px', height: '60px', backgroundColor: '#FFFFFF', border: '2px solid #3C3C3B', outline: 'none', borderRadius: '60px', cursor: 'pointer' }}>Гортати</button>
            </div>
        </div>
    </div>
}

export function CarouselCard(props) {
    return <div style={{ width: 'auto', marginRight: props.mRight || '0' }}>
        <Link to='/' className='carouselCard' style={{ textDecoration: 'none' }}>
            <p style={{ fontSize: '14px', lineHeight: '12px', backgroundColor: '#B53535', color: '#FFFFFF', padding: '4px 14px', display: props.specialDisplay, borderRadius: '60px', zIndex: '2', position: 'absolute', marginTop: '-10px', marginLeft: '75px' }}>{props.special}</p>
            <img src={props.cover} alt='book cover'></img>
            <p style={{
                color: '#B53535', margin: '0', maxHeight: '52px', maxWidth: '235px', display: '-webkit-box', WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis'
            }}>{props.name}</p>
            <p style={{ color: '#686868', marginTop: '10px', marginBottom: '24px' }}>{props.author}</p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ color: '#3C3C3B', textDecoration: 'line-through #3C3C3B', margin: '0', marginRight: '10px', display: props.oldPriceDisplay }}>{props.oldPrice}</p>
                <p className='big' style={{ color: '#B53535', margin: '0' }}>{props.price} ГРН</p>

            </div>
        </Link>
    </div >
}

export function Carousel(props) {
    const carouselRef = useRef(null);
    const flktyRef = useRef(null);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const Flickity = require('flickity');
            flktyRef.current = new Flickity(carouselRef.current, {
                groupCells: 3,
                freeScroll: false,
                wrapAround: true,
                prevNextButtons: false,
                pageDots: false,
                cellAlign: 'left',
                contain: true,
                imagesLoaded: true,
                selectedAttraction: 0.025,
                friction: 0.4
            });
        }

        return () => {
            if (flktyRef.current) {
                flktyRef.current.destroy();
            }
        };
    }, []);

    const handlePrev = () => {
        if (flktyRef.current) {
            flktyRef.current.previous();
        }
    };

    const handleNext = () => {
        if (flktyRef.current) {
            flktyRef.current.next();
        }
    };

    return (
        <div style={{ position: 'relative', height: '440px' }}>
            <button onClick={handlePrev} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', zIndex: 2, outline: 'none' }} onFocus={(e) => e.target.style.outline = 'none'}>
                <img src="/left.png" alt="Previous" style={{ width: '17px', height: '33px' }} />
            </button>

            <div ref={carouselRef} className="carousel" style={{ height: '440px', width: '878px', overflow: 'hidden', background: 'transparent', margin: '0 auto' }}>
                {props.cards.map((card, index) => (
                    <CarouselCard key={index} mRight={card.mRight} special={card.special} specialDisplay={card.display} cover={card.cover} name={card.name} author={card.author} oldPrice={card.oldPrice} oldPriceDisplay={card.oldPriceDisplay} price={card.price} />
                ))}
            </div>

            <button
                onClick={handleNext} style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', zIndex: 10, outline: 'none' }} onFocus={(e) => e.target.style.outline = 'none'}>
                <img src='/right.png' alt="Next" style={{ width: '17px', height: '33px' }} />
            </button>
        </div>
    );
}

export function BooksSection(props) {
    return <section style={{ paddingTop: '31px', marginTop: '61px', borderTop: '1px solid #2C2C2C' }}>
        <h2 style={{ color: '#B53535', margin: '0', marginBottom: '14px', width: '100%', textAlign: 'center' }}>{props.info.title}</h2>
        <p style={{ width: '655px', whiteSpace: 'pre-line', textAlign: 'center', color: '#3C3C3B', margin: '0px auto 70px auto' }}>
            {props.info.description.parts.map((part, index) => (
                <span key={index} style={{ color: part.color }}>
                    {part.text}
                </span>
            ))}
        </p>
        <Carousel cards={props.info.cards}></Carousel>
    </section>
}

const booksSections = [
    {
        title: 'Новинки КСД',
        description: {
            parts: [
                { text: 'Новодруки видавництва бестселерів КСД. ', color: '#3C3C3B' },
                { text: '\nКультові твори, лауреати премій, зірки сучасної прози', color: '#3C3C3B' }
            ]
        }
        , cards: [
            { mRight: '143px', special: 'ЕКСКЛЮЗИВ!', display: 'inline', cover: '/littleFriend.png', name: 'Маленький друг', author: 'Д. Тартт', oldPrice: '450', oldPriceDisplay: 'block', price: '410' },
            { mRight: '143px', special: 'НОВИНКА', display: 'inline', cover: '/holly.png', name: 'Голлі', author: 'Кінг. С', oldPrice: '490', oldPriceDisplay: 'block', price: '440' },
            { mRight: '143px', display: 'none', cover: '/notesOfHatred.png', name: 'Нотатки ненависті', author: 'В. Кіланд, П. Вард ', oldPrice: '330', oldPriceDisplay: 'block', price: '300' },
            { mRight: '146px', display: 'none', cover: '/forthWing.png', name: 'Четверте крило', author: 'Ребекка Яррос', oldPrice: '750', oldPriceDisplay: 'block', price: '680' },
            { mRight: '147px', display: 'none', cover: '/fan.png', name: 'Фанат', author: 'Ню Горнбі', oldPrice: '350', oldPriceDisplay: 'block', price: '320' },
            { mRight: '147px', display: 'none', cover: '/murderIsEasy.png', name: 'Убивство - це легко', author: 'А. Крісті', oldPrice: '250', oldPriceDisplay: 'block', price: '230' }
        ]
    },
    {
        title: 'Новинки партнерів',
        description: {
            parts: [
                { text: 'Книжки ', color: '#3C3C3B' },
                { text: 'провідних видавництв', color: '#B53535' },
                { text: ' країни.\nШирокий асортимент, актуальні ціни', color: '#3C3C3B' }
            ]
        },
        cards: [
            { mRight: '127px', display: 'none', cover: '/bluePeriod.png', name: 'Блакитний період', author: 'Цубаса Ямаґучі', oldPriceDisplay: 'none', price: '200' },
            { mRight: '148px', display: 'none', cover: '/legend.png', name: 'Легенда', author: 'Стефані Ґарбер', oldPriceDisplay: 'none', price: '600' },
            { mRight: '148px', display: 'none', cover: '/aristotle.png', name: 'Арістотель і Данте розкривають таємниці всесвіту', author: 'Бенджамін Аліре Саенс', oldPriceDisplay: 'none', price: '450' },
            { mRight: '143px', special: 'ЕКСКЛЮЗИВ!', display: 'inline', cover: '/littleFriend.png', name: 'Маленький друг', author: 'Д. Тартт', oldPrice: '450', oldPriceDisplay: 'block', price: '410' },
            { mRight: '143px', special: 'НОВИНКА', display: 'inline', cover: '/holly.png', name: 'Голлі', author: 'Кінг. С', oldPrice: '490', oldPriceDisplay: 'block', price: '440' },
            { mRight: '143px', display: 'none', cover: '/notesOfHatred.png', name: 'Нотатки ненависті', author: 'В. Кіланд, П. Вард ', oldPrice: '330', oldPriceDisplay: 'block', price: '300' }
        ]
    },
    {
        title: 'Хіт продажу',
        description: {
            parts: [
                { text: 'Що читають ', color: '#B53535' },
                { text: 'та обговорюють найбльше? \nПопулярні видання сезону', color: '#3C3C3B' }
            ]
        },
        cards: [
            { mRight: '146px', display: 'none', cover: '/forthWing.png', name: 'Четверте крило', author: 'Ребекка Яррос', oldPrice: '750', oldPriceDisplay: 'block', price: '680' },
            { mRight: '147px', display: 'none', cover: '/fan.png', name: 'Фанат', author: 'Ню Горнбі', oldPrice: '350', oldPriceDisplay: 'block', price: '320' },
            { mRight: '147px', display: 'none', cover: '/murderIsEasy.png', name: 'Убивство - це легко', author: 'А. Крісті', oldPrice: '250', oldPriceDisplay: 'block', price: '230' },
            { mRight: '127px', display: 'none', cover: '/bluePeriod.png', name: 'Блакитний період', author: 'Цубаса Ямаґучі', oldPriceDisplay: 'none', price: '200' },
            { mRight: '148px', display: 'none', cover: '/legend.png', name: 'Легенда', author: 'Стефані Ґарбер', oldPriceDisplay: 'none', price: '600' },
            { mRight: '148px', display: 'none', cover: '/aristotle.png', name: 'Арістотель і Данте розкривають таємниці всесвіту', author: 'Бенджамін Аліре Саенс', oldPriceDisplay: 'none', price: '450' }
        ]
    },
    {
        title: 'Книжкові комплекти',
        description: {
            parts: [
                { text: 'Разом - дешевше. ', color: '#B53535' },
                { text: 'Купуйте книжкові \nкомплекти з додатковою знижкою. ', color: '#3C3C3B' }
            ]
        },
        cards: [
            { mRight: '86px', display: 'none', cover: '/tilda.png', name: 'Комплект «Тільда Яблучне Зернятко» з 4 книг за суперціною', author: 'Андреас Г. Шмахтль', oldPrice: '975', oldPriceDisplay: 'block', price: '900' },
            { mRight: '100px', display: 'none', cover: '/yuriy.png', name: 'Комплект з 5 книг Юрія Даценко за суперціною', author: 'Юрій Даценко', oldPrice: '1000', oldPriceDisplay: 'block', price: '990' },
            { mRight: '111px', display: 'none', cover: '/puaro.png', name: '«Легендарний Пуаро» комплект з 24 книг за суперціною', author: 'А. Крісті', oldPrice: '5400', oldPriceDisplay: 'block', price: '4960' },
            { mRight: '86px', display: 'none', cover: '/gastro.png', name: 'GASTRO OBSCURA. Найдивовижніші смачні місця планети', author: 'С. Вонґ, Д. Тьюрас', oldPrice: '800', oldPriceDisplay: 'block', price: '720' },
            { mRight: '79px', display: 'none', cover: '/creative.png', name: 'Творчий акт: спосіб буття', author: 'Рік Рубін', oldPrice: '500', oldPriceDisplay: 'block', price: '450' },
            { mRight: '79px', display: 'none', cover: '/witcher.png', name: 'Комплект книг «Відьмак» (8 книг)', author: 'Анджей Сапковський', oldPrice: '1344', oldPriceDisplay: 'block', price: '1215' }
        ]
    },
    {
        title: 'Подарункові книжки',
        description: {
            parts: [
                { text: 'Якісні видання, ілюстровані графічні романи\nі книжкові комплекти - все, що стане ', color: '#3C3C3B' },
                { text: 'найкращим подарунком ', color: '#B53535' },
                { text: 'рідним та друзям!', color: '#3C3C3B' }
            ]
        },
        cards: [
            { mRight: '86px', display: 'none', cover: '/gastro.png', name: 'GASTRO OBSCURA. Найдивовижніші смачні місця планети', author: 'С. Вонґ, Д. Тьюрас', oldPrice: '800', oldPriceDisplay: 'block', price: '720' },
            { mRight: '79px', display: 'none', cover: '/creative.png', name: 'Творчий акт: спосіб буття', author: 'Рік Рубін', oldPrice: '500', oldPriceDisplay: 'block', price: '450' },
            { mRight: '79px', display: 'none', cover: '/witcher.png', name: 'Комплект книг «Відьмак» (8 книг)', author: 'Анджей Сапковський', oldPrice: '1344', oldPriceDisplay: 'block', price: '1215' },
            { mRight: '86px', display: 'none', cover: '/tilda.png', name: 'Комплект «Тільда Яблучне Зернятко» з 4 книг за суперціною', author: 'Андреас Г. Шмахтль', oldPrice: '975', oldPriceDisplay: 'block', price: '900' },
            { mRight: '100px', display: 'none', cover: '/yuriy.png', name: 'Комплект з 5 книг Юрія Даценко за суперціною', author: 'Юрій Даценко', oldPrice: '1000', oldPriceDisplay: 'block', price: '990' },
            { mRight: '111px', display: 'none', cover: '/puaro.png', name: '«Легендарний Пуаро» комплект з 24 книг за суперціною', author: 'А. Крісті', oldPrice: '5400', oldPriceDisplay: 'block', price: '4960' }

        ]
    }

]

export function Home() {
    const news = [
        { image: '/news1.png', date: '1 травня 2024 р.', title: 'Купуйте книги, вибирайте доставку Укрпоштою', description: 'Час для вигідних покупок! Вартість доставки знижено! Детальніше ...', raters: '6', rating: '5.0' },
        { image: '/news2.png', date: '1 травня 2024 р.', title: 'Книжковий дайджест КСД: травневі новинки', description: 'Гортайте дайджест і вибирайте нові книжки до покупки. Нехай ці історії порадують вас весняними вечорами! ...', raters: '1', rating: '0.0' },
        { image: '/news3.png', date: '18 квітня 2024 р.', title: 'День книги та авторського права: подвоюємо КСДкоїни на честь свята!', description: 'Купуйте книжки і отримуйте подвоєні КСДкоїни. Більше книжок — більше коїнів. Лише до 24 квітня, поспішайте! ...', raters: '32', rating: '4.5' },
        { image: '/news4.png', date: '12 квітня 2024 р.', title: 'День книги та авторського права: подвоюємо КСДкоїни на честь свята!', description: 'Купуйте книжки і отримуйте подвоєні КСДкоїни. Більше книжок — більше коїнів. Лише до 24 квітня, поспішайте! ...', raters: '0' },
        { image: '/news5.png', date: '21 березня 2024 р.', title: 'Нам 24 роки! День народження КСД', description: 'Хапайте знижку і святкуйте разом з нами: -24% на всі книжки видавництва КСД! ...', raters: '10', rating: '5.0' }
    ]
    return <main>
        <img src='/homeBags.png' alt='bags' style={{ position: 'absolute', top: '2756px', left: '80px' }}></img>
        <img src='/womanShopping.png' alt='woman shopping' style={{ position: 'absolute', top: '4580px', left: '422px' }}></img>
        <div className='wrapper'>
            <Navigation></Navigation>
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap' }}>
                <New></New>
                <section style={{ marginTop: '30px', position: 'relative' }}>
                    <img src='/forClientsPerson.png' alt='Person Standing' style={{ position: 'absolute', top: '80px', left: '-100px', zIndex: '2' }}></img>
                    <h2 style={{ margin: '0', marginBottom: '30px' }}>Клієнтам КСД</h2>
                    <div style={{ width: '952px', display: 'flex', justifyContent: 'space-between', marginLeft: '44px' }}>
                        <ForClients image='/coinIcon.png' altern='Pig Coin Image' title='КСДкоїни' text='Збирайте віртуальні монетки за кожне замовлення у КСД і обмінюйте на бонуси'></ForClients>
                        <ForClients image='/giftIcon.png' altern='Bonus Gift Image' title='Бонуси' text='Додаткова знижка на наступні покупки, читайте більше і заощаджуйте'></ForClients>
                    </div>
                    {booksSections.map((section, index) => (
                        <BooksSection key={index} info={section} />
                    ))}
                </section>

            </div>
        </div>
        <News top='307px' news={news}></News>
        <ResentlyViewed></ResentlyViewed>
    </main>
}