import React, { useEffect, useRef, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ResentlyViewed, Navigation, Separator, Path } from './main';
import { AddToCart } from './cart';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

export function Sort(props) {
    const [activeName, setActiveName] = useState(null);

    const handleClick = (name) => {
        setActiveName(name === activeName ? null : name);
    };

    return (
        <div className='sortWrapper'>
            {props.options.map((opt) => (
                <button key={opt.name} name={opt.name} className={`sortButton ${activeName === opt.name ? 'active' : ''}`} onClick={() => handleClick(opt.name)} >
                    {opt.text}
                </button>
            ))}
        </div>
    );
}

export function GenreTopThreeCard(props) {
    return <div style={{ maxWidth: '32.864vw', cursor: 'pointer' }}>
        <img src={props.image} alt={props.image} style={{ height: '20.416vw' }}></img>
        <div style={{ marginTop: '2.6vw', paddingLeft: '0.33vw' }}>
            <p style={{ color: '#B53535', margin: "0 0 1.4583vw 0" }} className='topThreeTitle'>{props.title}</p>
            <p style={{ color: '#686868', margin: "0 0 0.5729vw 0" }}>{props.author}</p>
            <div style={{ display: 'flex', gap: '0.7947vw', alignItems: 'center' }}>
                <p style={{ color: '#3C3C3B', textDecoration: 'line-through #3C3C3B', margin: '0' }}>{props.oldPrice}</p>
                <p className='big' style={{ color: '#B53535', margin: '0' }}>{props.price} ГРН</p>
            </div>
        </div>
        <AddToCart text='До кошика' image='/cartIcon.png' mLeft="0" mRight="0" />
    </div>
}

const top3 = [
    {
        image: '/hollyTop3.png',
        title: 'Голлі',
        author: 'Кінг С.',
        oldPrice: '490',
        price: '440',
        onSale: true
    },
    {
        image: '/omanliveTop3.png',
        title: 'Оманливе коло',
        author: 'С. Пономаренко',
        oldPrice: '240',
        price: '220',
        onSale: true
    },
    {
        image: '/vorogTop3.png',
        title: 'Ворог дуже близько. Книга 1',
        author: 'К. Хантер',
        oldPrice: '330',
        price: '300',
        onSale: true
    }
]

export function TopThree(props) {
    return <section id='topThree'>
        <h1 className='title' style={{ color: '#B53535', margin: '0 0 0.416vw 0' }}>Гостросюжетні трилери</h1>
        <p style={{ width: '54.16vw', color: '#686868', margin: '0 0 2.864vw 0' }} id='topThreeP'>Захоплюючі історії для тих, хто не проти полоскотати свої нерви. Психологічні, детективні та містичні трилери, хоррор, книги, за якими були зняті найкращі фільми жахів.</p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {props.top3.map((item, index) => (
                <GenreTopThreeCard key={index} image={item.image} title={item.title} author={item.author} oldPrice={item.oldPrice} price={item.price} onSale={item.onSale}></GenreTopThreeCard>
            ))}
        </div>
    </section>
}


export function GenreBookCard(props) {
    return <div className='genreBookCard'>
        {props.forAdults && (
            <img src='/forAdults.png' alt="icon for adults" className='forAdultsIcon' />
        )}
        <img src={props.image} alt={props.image} style={{ height: '14.583vw' }} className='genreBookImg'></img>
        <div className='infoPriceWrap'>
            <div className='genreBookInfo'>
                <p style={{ color: '#686868', margin: "0 0 0.7291vw 0" }}>{props.author}</p>
                <p style={{ color: '#B53535', margin: "0 0 0.7291vw 0" }}>{props.title}</p>
                <div style={{ padding: '0.78125vw 0', display: 'flex', gap: '0.52vw', width: '16.82vw', height: '3.125vw', alignItems: 'center' }} className='bookRatingGenre'>
                    <div style={{ width: '9.47916vw', display: 'flex', justifyContent: 'space-between' }} className='starsWrapper'>
                        {props.stars.map((item) => (
                            <img src={item} alt={item} style={{ width: '1.5625vw', height: '1.5625vw' }}></img>
                        ))}
                    </div>
                    <p style={{ color: '#686868', margin: '0', height: '1.3vw' }} className='genreRatingP'>{props.ratings} оцінок</p>
                </div>
                {props.forAdults && (
                    <p style={{ fontSize: '1vw', color: '#B53535', width: '29.6354vw', margin: '0.2vw 0 0 0' }} className='forAdultsWarning'>
                        Увага! Продукція сексуального характеру або інша продукція з віковим обмеженням. Продаж неповнолітнім заборонено. Продаж відповідно до вікового обмеження.
                    </p>
                )}
                <p style={{ color: '#686868', width: '30.9375vw', margin: '0.9895vw 0 0 0' }} className='genreBookDescription'>{props.decsription}<span style={{ color: '#B53535', cursor: 'pointer' }}>   Читати далі »</span></p>
            </div>
            <div className='priceWrap'>
                <p style={{ color: '#3C3C3B', textDecoration: 'line-through #3C3C3B', textAlign: 'right', margin: '0 0 0.2vw 0' }}>{props.oldPrice}</p>
                <p className='big' style={{ color: '#B53535', margin: '0 0 0.91927vw 0', textAlign: 'right' }}>{props.price} ГРН</p>
                <AddToCart text='До кошика' image='/cartIcon.png' mLeft="0" mRight="0" />
            </div>
        </div>

    </div>
}

export function Question(props) {
    return <div style={{ marginTop: props.mTop }} className='questionAnswer'>
        <h3 className='questionTitle' style={{ color: '#B53535', width: '79.16vw', margin: '0' }}>{props.question}</h3>
        <p className='answer' style={{ color: '#686868', width: '79.16vw', margin: '0.7291vw 0 0 0', whiteSpace: 'pre-line' }}>{props.answer}</p>
    </div>
}

const cards = [
    {
        image: '/hollyGenre.png',
        author: 'Кінг С.',
        title: 'Голлі',
        ratings: '40',
        decsription: 'Детектив Голлі Гібні мріє про відпустку: на нову справу в неї просто немає сил. Однак почувши відчайдушну мольбу в голосі Пенні Дал, Голлі без вагань погоджується допомогти жінці в пошуках доньки',
        oldPrice: '490',
        price: '440',
        onSale: true,
        forAdults: false,
        stars: ['/star.png', '/star.png', '/star.png', '/star.png', '/star.png']
    },
    {
        image: '/omanliveKolo.png',
        author: 'С. Пономаренко',
        title: 'Оманливе коло',
        ratings: '15',
        decsription: 'Подорож до Індії з коханою Анітою не допомогла кіносценаристу Оресту подолати творчу кризу. Ба більше: знайомство з похмурим культом богині Калі спровокувало повернення кошмарів',
        oldPrice: '240',
        price: '220',
        onSale: true,
        forAdults: false,
        stars: ['/star.png', '/star.png', '/star.png', '/star.png', '/halfStar.png']
    },
    {
        image: '/vorogDujeBlisko.png',
        author: 'К. Хантер',
        title: 'Ворог дуже близько. Книга 1',
        ratings: '6',
        decsription: 'Детектив оксфордської поліції Адам Фоулі знає: якщо злочин скоєно проти дитини, то в дев’яти випадках з десяти в цьому винен хтось із її найближчого оточення',
        oldPrice: '330',
        price: '300',
        onSale: true,
        forAdults: false,
        stars: ['/star.png', '/star.png', '/star.png', '/star.png', '/star.png']
    },
    {
        image: '/Hirurg.png',
        author: 'Т. Ґеррітсен',
        title: 'Хірург. Книга 1',
        ratings: '141',
        decsription: 'Вбивця вдирається у домівки самотніх жінок. Він не просто вбиває їх. Він виробляє з ними такі жахіття, що здобув прізвисько Хірург. Він методично копіює стиль серійного маніяка, вбитого два роки тому',
        oldPrice: '280',
        price: '250',
        onSale: true,
        forAdults: true,
        stars: ['/star.png', '/star.png', '/star.png', '/star.png', '/halfStar.png']
    },
    {
        image: '/poluvanyaNaAdelinu.png',
        author: 'Х. Д. Карлтон',
        title: 'Полювання на Аделіну. Книга 2',
        ratings: '44',
        decsription: 'Смерть крокує обіч мене, та Похмурий Жнець мені більше не рівня. Я потрапила в пастку до чудовиськ у подобі чоловіків і до тих, хто видає себе за когось іншого. Вони не зможуть тримати мене в себе завжди',
        oldPrice: '400',
        price: '380',
        onSale: true,
        forAdults: true,
        stars: ['/star.png', '/star.png', '/star.png', '/star.png', '/halfStar.png']
    }
];

export function GenreBooksPage(props) {
    const allStars = ['/star.png', '/star.png', '/star.png', '/star.png', '/star.png']
    const halfStar = ['/star.png', '/star.png', '/star.png', '/star.png', '/halfStar.png']
    return <section>{
        props.cards.slice(0, 5).map((item, index) => (
            <GenreBookCard key={index} image={item.image} author={item.author} title={item.title} ratings={item.ratings} decsription={item.decsription} oldPrice={item.oldPrice} price={item.price} onSale={item.onSale} forAdults={item.forAdults} stars={item.stars}></GenreBookCard>
        ))
    }</section>

}

export const Button = () => {
    const [activePage, setActivePage] = useState(1);

    return (
        <div className="pagination">
            {[1, 2, 3, 4, 5].map((page) => (
                <button
                    key={page}
                    className={activePage === page ? "button active" : "button"}
                    onClick={() => setActivePage(page)}
                >
                    {page}
                </button>
            ))}
            <button className="rightButton" onClick={() => setActivePage((prev) => Math.min(prev + 1, 5))}>
                <img src="/rightSecond.png" alt="Next" className="secondRightImg" />
            </button>
        </div>
    );
};


export function Genre(props) {
    return <main>
        <img src='/booksBags.png' alt='bags' style={{ position: 'absolute', top: '139.8958vw', left: '4.166vw', width: '25.7291vw' }} className='bagsImg'></img>
        <div className='wrapper'>
            <Navigation id='menu'></Navigation>
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap' }}>
                <Path width='54.16vw' mTop='0'></Path>
                <TopThree top3={top3}></TopThree>
                <div id='showAndSort' style={{ display: 'flex', justifyContent: 'space-between', padding: '0.52vw 0', alignItems: 'center', marginBottom: '1.5625vw' }}>
                    <p className='subTitle' style={{ fontSize: '1.25vw', color: '#3C3C3B' }}>Показувати:</p>
                    <Sort
                        options={[
                            { name: '20', text: '20' },
                            { name: '30', text: '30' },
                            { name: '40', text: '40' },
                        ]}
                    />
                    <p className='subTitle' style={{ fontSize: '1.25vw', color: '#3C3C3B' }}>Сортувати за:</p>
                    <Sort
                        options={[
                            { name: 'date', text: 'датою' },
                            { name: 'popularity', text: 'популярністю' },
                            { name: 'price', text: 'ціною' },
                        ]}
                    />

                </div>

                <GenreBooksPage cards={cards}></GenreBooksPage>
                <Button></Button>
            </div>
        </div>
        <ResentlyViewed></ResentlyViewed>
        <section style={{ marginTop: '5.2vw', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '4.218vw' }}>
            <Separator color='#D6D9DC'></Separator>
            <Question question="Психологічні трилери: для тих, хто хоче полоскотати нерви" answer="Трилер — популярний різновид літератури, головна мета якого — змусити читача відчути тривожне очікування, нервове хвилювання та неконтрольований страх. Попри те, що страшні сюжети викликають у людини негативні емоції, коло шанувальників подібного літературного жанру постійно розширюється. Все тому, що цікаві книги трилери — це завжди динамічно, непередбачувано та неймовірно цікаво." mTop="4.27vw"></Question>
            <Question question="Страшні внутрішні демони роду Homo sapiens" answer="Не слід плутати трилери з класичними жахами. Дуже часто містичний складник зовсім відсутній у психологічній літературі. Сюжети, що описують страшні книги трилери, — це, як правило, реальні та правдиві історії з життя звичайних людей. Сутінки нашої підсвідомості приховують багато таємниць. Іноді ми самі не здогадуємося, як далеко можемо зайти заради власних бажань." mTop="5.2vw"></Question>
            <Question
                question="Чому ж не почати читати трилери українською мовою?"
                answer={`Варто хоч раз купити психологічні трилери, і ви більше не зможете зупинитися. Динамічний розвиток подій ні на хвилину не дає читачеві розслабитися, а фінал трилерів завжди важко передбачити. Психологічні романи описують потаємні закутки людської душі. І ніби з хірургічною точністю розкривають усі приховані там таємниці та загадки.

В інтернет-магазині «КСД» будь-який поціновувач трилерів знайде щось цікаве для себе. У віртуальному каталозі представлені трилери українською мовою від всесвітньо відомих письменників: книги С. Кінга — короля жахів, Т. Ґеррітсен — авторки медичних та романтичних трилерів, Д. Кунца — майстра саспенсу (тривожного очікування).

Також ви можете купити українські книги трилери, наприклад, романи письменника Макса Кідрука. Шанувальникам класичних історій, які екранізували голлівудські режисери, обов'язково сподобається роман «Екзорцист» В. Пітера Блетті або «Адвокат диявола» Е. Нейдермана.

В нашому інтернет-магазині широкий вибір трилерів різної цінової категорії. Ми постійно проводимо акції, щоб зробити книги доступними кожному українцю. Тож чекаємо на ваші замовлення!`}
                mTop="5.2vw"
            />
        </section>


    </main>
}