import React, { useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ResentlyViewed, Navigation, Separator, Path } from './main';
import { AddToCart } from './cart';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

export function GenreBookCard(props) {
    return <div className='genreBookCard'>
        {props.forAdults && (
            <img src='/forAdults.png' alt="icon for adults" className='forAdultsIcon' />
        )}
        <img src={props.image} alt={props.image} style={{ height: '280px' }}></img>
        <div className='infoPriceWrap'>
            <div className='genreBookInfo'>
                <p style={{ color: '#686868', margin: "0 0 14px 0" }}>{props.author}</p>
                <p style={{ color: '#B53535', margin: "0 0 14px 0" }}>{props.title}</p>
                <div style={{ padding: '15px 0px', display: 'flex', gap: '10px', width: '323px', height: '60px', alignItems: 'center' }}>
                    <div style={{ width: '182px', display: 'flex', justifyContent: 'space-between' }}>
                        {props.stars.map((item) => (
                            <img src={item} alt={item} style={{ width: '30px', height: '30px' }}></img>
                        ))}
                    </div>
                    <p style={{ color: '#686868', margin: '0', height: '25px' }}>{props.ratings} оцінок</p>
                </div>
                {props.forAdults && (
                    <p style={{ fontSize: '20px', color: '#B53535', width: '569px', margin: '4px 0 0 0' }}>
                        Увага! Продукція сексуального характеру або інша продукція з віковим обмеженням. Продаж неповнолітнім заборонено. Продаж відповідно до вікового обмеження.
                    </p>
                )}
                <p style={{ color: '#686868', width: '594px', margin: '19px 0 0 0' }}>{props.decsription}<span style={{ color: '#B53535', cursor: 'pointer' }}>   Читати далі »</span></p>
            </div>
            <div className='priceWrap'>
                <p style={{ color: '#3C3C3B', textDecoration: 'line-through #3C3C3B', textAlign: 'right', margin: '0 0 4px 0' }}>{props.oldPrice}</p>
                <p className='big' style={{ color: '#B53535', margin: '0 0 17.65px 0', textAlign: 'right' }}>{props.price} ГРН</p>
                <AddToCart text='До кошика' image='/cartIcon.png' mLeft="0" mRight="0" />
            </div>
        </div>

    </div>
}

export function Question(props) {
    return <div style={{ marginTop: props.mTop }}>
        <h3 className='title' style={{ color: '#B53535', width: '1520px', margin: '0' }}>{props.question}</h3>
        <p style={{ color: '#686868', width: '1520px', margin: '14px 0 0 0', whiteSpace: 'pre-line' }}>{props.answer}</p>
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

export function Genre(props) {
    return <main>
        {/* <img src='/booksBags.png' alt='bags' style={{ position: 'absolute', top: '2756px', left: '80px' }}></img> */}
        <div className='wrapper'>
            <Navigation></Navigation>
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap' }}>
                <Path width='1040px' mTop='0'></Path>
                <GenreBooksPage cards={cards}></GenreBooksPage>
            </div>
        </div>
        <ResentlyViewed></ResentlyViewed>
        <section style={{ marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '81px' }}>
            <Separator color='#D6D9DC'></Separator>
            <Question question="Психологічні трилери: для тих, хто хоче полоскотати нерви" answer="Трилер — популярний різновид літератури, головна мета якого — змусити читача відчути тривожне очікування, нервове хвилювання та неконтрольований страх. Попри те, що страшні сюжети викликають у людини негативні емоції, коло шанувальників подібного літературного жанру постійно розширюється. Все тому, що цікаві книги трилери — це завжди динамічно, непередбачувано та неймовірно цікаво." mTop="82px"></Question>
            <Question question="Страшні внутрішні демони роду Homo sapiens" answer="Не слід плутати трилери з класичними жахами. Дуже часто містичний складник зовсім відсутній у психологічній літературі. Сюжети, що описують страшні книги трилери, — це, як правило, реальні та правдиві історії з життя звичайних людей. Сутінки нашої підсвідомості приховують багато таємниць. Іноді ми самі не здогадуємося, як далеко можемо зайти заради власних бажань." mTop="100px"></Question>
            <Question
                question="Чому ж не почати читати трилери українською мовою?"
                answer={`Варто хоч раз купити психологічні трилери, і ви більше не зможете зупинитися. Динамічний розвиток подій ні на хвилину не дає читачеві розслабитися, а фінал трилерів завжди важко передбачити. Психологічні романи описують потаємні закутки людської душі. І ніби з хірургічною точністю розкривають усі приховані там таємниці та загадки.

В інтернет-магазині «КСД» будь-який поціновувач трилерів знайде щось цікаве для себе. У віртуальному каталозі представлені трилери українською мовою від всесвітньо відомих письменників: книги С. Кінга — короля жахів, Т. Ґеррітсен — авторки медичних та романтичних трилерів, Д. Кунца — майстра саспенсу (тривожного очікування).

Також ви можете купити українські книги трилери, наприклад, романи письменника Макса Кідрука. Шанувальникам класичних історій, які екранізували голлівудські режисери, обов'язково сподобається роман «Екзорцист» В. Пітера Блетті або «Адвокат диявола» Е. Нейдермана.

В нашому інтернет-магазині широкий вибір трилерів різної цінової категорії. Ми постійно проводимо акції, щоб зробити книги доступними кожному українцю. Тож чекаємо на ваші замовлення!`}
                mTop="100px"
            />
        </section>


    </main>
}