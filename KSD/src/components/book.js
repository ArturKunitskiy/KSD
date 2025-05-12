import React, { useEffect, useRef, useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { ResentlyViewed, Navigation, Separator, Path, BooksCoversCarousel } from './main';
import { AddToCart } from './cart';
import { News } from './main';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

export function AddBonus(props) {
    return <div style={{ padding: '10px', border: '1px solid #686868', borderRadius: '10px', display: 'flex', height: '37px', gap: '10px', alignItems: 'center', width: '152px', marginBottom: '26px' }}>
        <p className='addBonusText'>+{props.amount}</p>
        <img src='/coin.png' alt='coin' style={{ height: '20px', width: '20px' }}></img>
        <p className='addBonusText'>на рахунок</p>
    </div>
}

export function BookCard(props) {
    return <section style={{ borderTop: '1px solid #2C2C2C', marginBottom: '56px', paddingTop: '42px', paddingLeft: '9px', display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <img src={props.image} alt={props.image} style={{ marginBottom: '18px' }}></img>
            <div style={{ display: 'flex', padding: '10px', justifyContent: 'space-between', width: '236px', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <img src='/enlarge.png'></img>
                    <p style={{ fontSize: '12px', color: '#686868', margin: '0', lineHeight: '12px' }}>Збільшити</p>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <img src='/size.png'></img>
                    <p style={{ fontSize: '12px', color: '#686868', margin: '0', lineHeight: '12px' }}>Дізнатися розмір</p>
                </div>
            </div>
        </div>
        <div style={{ width: '752px' }}>
            <AddBonus amount='4'></AddBonus>
            <h1 className='title' style={{ color: '#B53535', margin: '0 0 8px 0' }}>{props.title}</h1>
            <p style={{ color: '#686868', margin: '0 0 33px 1px' }}>{props.author}</p>
            <div style={{ padding: '26px 1px', borderTop: '1px solid #2C2C2C', borderBottom: '1px solid #2C2C2C', display: 'flex', alignItems: 'center' }}>
                <div style={{ marginRight: '77px' }}>
                    <p style={{ color: '#686868', margin: '0 0 8px 0' }}>Ваша ціна</p>
                    <p style={{ fontSize: '16px', color: '#686868', margin: '0' }}>Ціна в КСД</p>
                </div>
                <p className='title' style={{ color: '#B53535', marginRight: '64px' }}>{props.price} грн</p>
                <AddToCart text='До кошика' image='/cartIcon.png' mLeft="0" mRight="0" />
            </div>
        </div>
    </section>
}

const resentBooks = [
    {
        width: '1040px', carouselWidth: '880px', covers:
            [
                { cover: '/littleFriendSlider.png', height: '218px', mRight: '35px' },
                { cover: '/notesOfHatredSlider.png', height: '218px', mRight: '35px' },
                { cover: '/howLongSlider.png', height: '218px', mRight: '35px' },
                { cover: '/detectiveSlider.png', height: '218px', mRight: '35px' },
                { cover: '/fanSlider.png', height: '218px', mRight: '35px' },
                { cover: '/witcherSlider.png', height: '218px', mRight: '35px' },
                { cover: '/creativeSlider.png', height: '218px', mRight: '35px' },
                { cover: '/gastroSlider.png', height: '218px', mRight: '35px' },
                { cover: '/puaroSlider.png', height: '218px', mRight: '35px' },
                { cover: '/yuriySlider.png', height: '218px', mRight: '35px' }
            ]
    },
    {
        width: '1520px', carouselWidth: '1302px', covers:
            [
                { cover: '/witcherSlider.png', height: '280px', mRight: '85px' },
                { cover: '/creativeSlider.png', height: '280px', mRight: '85px' },
                { cover: '/gastroSlider.png', height: '280px', mRight: '85px' },
                { cover: '/puaroSlider.png', height: '280px', mRight: '85px' },
                { cover: '/yuriySlider.png', height: '280px', mRight: '85px' },
                { cover: '/littleFriendSlider.png', height: '280px', mRight: '85px' },
                { cover: '/notesOfHatredSlider.png', height: '280px', mRight: '85px' },
                { cover: '/howLongSlider.png', height: '280px', mRight: '85px' },
                { cover: '/detectiveSlider.png', height: '280px', mRight: '85px' },
                { cover: '/fanSlider.png', height: '280px', mRight: '85px' }
            ]
    }
]

export function DescriptionReview(props) {
    return <div className='descriptionReview'>
        <p className='small' style={{ color: '#2C2C2C', width: '944px', margin: '0 0 0 96px' }}>{props.review}</p>
        <p className='small' style={{ color: '#686868', margin: '24px 0 0 0', textAlign: 'right' }}>{props.publisher}</p>
    </div>
}

export function Characteristics(props) {
    return <table>
        <tr>
            <td>Код товару</td>
            <td style={{ color: '#B53535' }}>4136503</td>
        </tr>
        <tr>
            <td>Назва товару</td>
            <td>Звичайні монстри. Книга 1</td>
        </tr>
        <tr>
            <td>Автор</td>
            <td>Дж. М. Міро</td>
        </tr>
        <tr>
            <td>Мова</td>
            <td>українська</td>
        </tr>
        <tr>
            <td>Оригінальна назва</td>
            <td>Ordinary Monsters</td>
        </tr>
        <tr>
            <td>Мова оригіналу</td>
            <td>англійська</td>
        </tr>
        <tr>
            <td>Обкладинка</td>
            <td>палітурка</td>
        </tr>
        <tr>
            <td>Сторінок</td>
            <td>608</td>
        </tr>
        <tr>
            <td>Формат</td>
            <td>150x220 мм</td>
        </tr>
        <tr>
            <td>Видавництво</td>
            <td>КСД</td>
        </tr>
        <tr>
            <td>Перекладач(і)</td>
            <td>Шевчук Роксана</td>
        </tr>
        <tr>
            <td>Серія</td>
            <td>Таланти</td>
        </tr>
        <tr>
            <td>Рік видання</td>
            <td>2024</td>
        </tr>
        <tr>
            <td>ISBN</td>
            <td>978-617-15-0633-6</td>
        </tr>
        <tr>
            <td>Розділ:</td>
            <td style={{ color: '#B53535' }}>Сучасні автори , Фентезі</td>
        </tr>
    </table>
}

export function ShareProduct(props) {
    return <section style={{ borderTop: '1px solid #2C2C2C', paddingTop: '48px', marginBottom: '138px' }}>
        <p style={{ color: '#B53535', marginBottom: '14px' }}>СПОДОБАВСЯ ТОВАР? РОЗКАЖІТЬ ДРУЗЯМ:</p>
        <div style={{ display: 'flex', gap: '30px' }}>
            <a href='https://instagram.com'><img src='/instagram.png' alt='instagram' style={{ height: '45px', width: '45px' }}></img></a>
            <a href='https://web.telegram.org'><img src='/tg.png' alt='telegram' style={{ height: '45px', width: '45px' }}></img></a>
            <a href='https://www.viber.com'><img src='/viber.png' alt='viber' style={{ height: '45px', width: '45px' }}></img></a>
        </div>
    </section>
}

export function Review(props) {
    return <div style={{ marginBottom: '30px', backgroundColor: '#D6D9DC', borderRadius: '20px', padding: '14px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '44px' }}>
            <p style={{ color: '#686868', fontSize: '16px' }}>{props.name}</p>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                <img src='/dislike.png' alt='dislike' style={{ width: '24px', height: '24px' }}></img>
                <img src='/like.png' alt='like' style={{ width: '24px', height: '24px' }}></img>
                <p style={{ color: '#B53535', fontSize: '16px' }}>Оцінка товару: {props.rating}</p>
            </div>
        </div>
        <p style={{ color: '#2C2C2C', margin: '30px 0' }}>
            {props.reviewText}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '57px' }}>
            <p style={{ color: '#686868', fontSize: '16px' }}>{props.date}</p>
            <p style={{ color: '#686868', fontSize: '16px' }}>Рейтинг відгуку: <span style={{ color: '#2C2C2C' }}>{props.reviewRating}</span></p>
        </div>
    </div>
}

export function Reviews(props) {
    return <section style={{ marginBottom: '42px' }}>
        <div style={{ width: '1040px', padding: '10px', borderBottom: '1px solid #2C2C2C', display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
            <p className='subTitle' style={{ color: '#686868', margin: '0' }}>Відгуки: {props.reviews}</p>
            <p className='small' style={{ color: '#2C2C2C', margin: '0' }}>Оцінка товару: {props.rating}</p>
        </div>
        <Review name='Віталій' rating='5' reviewText='По анотації схоже на «Дім дивних дітей». Дуже цікаво буде почитати!' date='1 квітня 2024р. в 16:31' reviewRating='15'></Review>
        <Review name='Анастасія' rating='0' reviewText='Придбала сьогодні книгу у вашому фізичному магазині, перше враження трішки зіпсоване через очевидний дефект, який можна побачити лише після зняття плівки' date='7 травня 2024 р. в 15:18' reviewRating='1'></Review>
        <div style={{ width: '1040px', padding: '10px', borderBottom: '1px solid #2C2C2C', display: 'flex', justifyContent: 'space-between' }}>
            <p className='subTitle' style={{ color: '#686868', margin: '0' }}>Усього відгуків: {props.reviews}</p>
            <p className='small' style={{ color: '#2C2C2C', margin: '0' }}>Показано з 1 по  {props.reviews}</p>
        </div>
        <div style={{ display: 'flex', gap: '45px', alignItems: 'center', justifyContent: 'center', marginTop: '52px' }}>
            <img src='/warningcircle.png' alt='warningCircle' style={{ width: '30px', height: '30px' }}></img>
            <p className='small' style={{ color: '#2C2C2C', width: '792px', margin: '0' }}>Тільки постійні клієнти КСД мають можливість залишати коментарі. Якщо ви постійний клієнт КСД, будь ласка, авторизуйтеся.</p>
        </div>
    </section>
}

export function Book(props) {
    const news = [
        { image: '/news1.png', date: '1 травня 2024 р.', title: 'Купуйте книги, вибирайте доставку Укрпоштою', description: 'Час для вигідних покупок! Вартість доставки знижено! Детальніше ...', raters: '6', rating: '5.0', link: '/News1' },
        { image: '/news2.png', date: '1 травня 2024 р.', title: 'Книжковий дайджест КСД: травневі новинки', description: 'Гортайте дайджест і вибирайте нові книжки до покупки. Нехай ці історії порадують вас весняними вечорами! ...', raters: '1', rating: '0.0', link: '/News2' },
        { image: '/news3.png', date: '18 квітня 2024 р.', title: 'День книги та авторського права: подвоюємо КСДкоїни на честь свята!', description: 'Купуйте книжки і отримуйте подвоєні КСДкоїни. Більше книжок — більше коїнів. Лише до 24 квітня, поспішайте! ...', raters: '32', rating: '4.5', link: '/News3' },
        { image: '/news4.png', date: '12 квітня 2024 р.', title: 'День книги та авторського права: подвоюємо КСДкоїни на честь свята!', description: 'Купуйте книжки і отримуйте подвоєні КСДкоїни. Більше книжок — більше коїнів. Лише до 24 квітня, поспішайте! ...', raters: '0', link: '/News4' },
        { image: '/news5.png', date: '21 березня 2024 р.', title: 'Нам 24 роки! День народження КСД', description: 'Хапайте знижку і святкуйте разом з нами: -24% на всі книжки видавництва КСД! ...', raters: '10', rating: '5.0', link: '/News5' }
    ]
    return <main>
        <img src='/booksBags.png' alt='bags' style={{ position: 'absolute', top: '2686px', left: '80px' }}></img>
        <div className='wrapper'>
            <Navigation></Navigation>
            <div style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', flexWrap: 'wrap', width: '1040px' }}>
                <Path width='1040px' mTop='0'></Path>
                <BookCard image='/ordinaryMonsters.png' title='Звичайні монстри. Книга 1' author='Дж. М. Міро' price='400'></BookCard>
                <p className='subTitle' style={{ color: '#686868', margin: '0 0 10px 10px' }}>З цим товаром часто купують</p>
                <section style={{ borderTop: '1px solid #2C2C2C' }}>
                    <BooksCoversCarousel info={resentBooks[0]}></BooksCoversCarousel>
                </section>
                <p className='subTitle' style={{ color: '#686868', margin: '0 0 10px 10px' }}>Опис книги</p>
                <section style={{ borderTop: '1px solid #2C2C2C', paddingTop: '30px', width: '1040px' }}>
                    <p className='bookDescription' style={{ marginBottom: '23px' }}>Початок циклу темного фентезі про вікторіанську Англію </p>
                    <ul style={{ marginBottom: '23px' }}>
                        <li className='bookDescription'>НАЙКРАЩА КНИГА ЛІТА 2022 від SheReads, Book Riot, Goodreads, Gizmodo, Daily Beast, Paste Magazine та інших</li>
                        <li className='bookDescription'>КСД придбали права на всі 3 книги циклу Таланти/The Talents Trilogy, які поступово будуть видані</li>
                        <li className='bookDescription'>Видання в суперобкладинці</li>
                    </ul>
                    <p className='bookDescription' style={{ marginBottom: '21px' }}>Чарлі Овід - особливий підліток із тяжким життям. Він постійно потерпає від побоїв, але не має на тілі жоднісінького шраму, бо організм хлопця здатен до швидкого самолікування. Проте Чарлі не єдиний, у кого є надзвичайні здібності: його приятель Марлоу може розплавити або зцілити плоть. Не характерні для звичайних людей вміння привертають до хлопців зайву увагу. </p>
                    <p className='bookDescription' style={{ marginBottom: '30px' }}>Під супроводом детектива Аліси Квік їх відправляють до маєтку, де перебувають інші діти з надможливостями. Однак виявляється, що мешканцям будинку загрожують темні сили, яким вони змушені протистояти. Чим закінчиться ця боротьба та чи дізнаються друзі всю правду про свої здібності?  </p>
                    <DescriptionReview review='Яскравий кінематографічний світ і його магія сподобаються любителям класичного фентезі' publisher='Booklist'></DescriptionReview>
                    <DescriptionReview review='Переконливий складний роман, що затягне вас у магічний гротескний вир альтернативної історії кінця ХІХ століття. Тут бездоганна світобудова, яка вражає деталями і викликає безмежний захват' publisher='BookPage'></DescriptionReview>
                </section>
                <p className='subTitle' style={{ color: '#686868', margin: '0 0 10px 10px' }}>Характеристики</p>
                <section style={{ borderTop: '1px solid #2C2C2C', paddingTop: '30px', marginBottom: '226px' }}>
                    <Characteristics></Characteristics>
                </section>
                <p className='subTitle' style={{ color: '#686868', margin: '0 0 10px 10px' }}>Про автора</p>
                <section style={{ borderTop: '1px solid #2C2C2C', paddingTop: '41px', marginBottom: '40px' }}>
                    <p className='small' style={{ width: '1040px', color: '#2C2C2C', margin: '0' }}>Дж. М. Міро - канадський прозаїк, поет і викладач Університету Вікторії. Його твори вишукано готичні й похмуро меланхолійні. Часто Міро порушує складні теми бідності, горя, балансування на межі життя і смерті, - цим його творчість нагадує поєднання романів Чарльза Дікенса з режисерськими роботами Джосса Відона.</p>
                </section>
                <Reviews reviews='3' rating='5'></Reviews>
                <ShareProduct></ShareProduct>
            </div>
        </div>
        <p className='subTitle' style={{ color: '#B53535', width: '1520px', margin: '0 auto', paddingLeft: '10px', borderBottom: '1px solid #2C2C2C', paddingBottom: '10px' }}>Нещодавно ви дивилися</p>
        <BooksCoversCarousel info={resentBooks[1]}></BooksCoversCarousel>
        <News top='100px' news={news}></News>
        <ResentlyViewed></ResentlyViewed>
    </main>
}