import React from 'react';
import { Outlet, Link } from 'react-router-dom';

export function ScrollingText() {
    const discountArray = ['Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн']
    return <div className='scrolling'>
        <div className='scroll'>
            <div className='leftToRight'>
                {discountArray.map((item) => <p>{item}</p>)}
            </div>
        </div>
    </div>
}

export function Header() {
    return <header>
        <Link to='/' style={{ width: '245px' }}><img src='logo.png' alt='logo' /></Link>
        <div className='search'>
            <input type='text' placeholder='Пошук товарів, категорій' style={{ lineHeight: '24px' }} />
            <button style={{ width: '48px', height: '48px', backgroundColor: '#B53535', borderRadius: '50%', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src='search.png' alt='search icon' style={{ width: '18px', height: '18px' }} /></button>
        </div>
        <div>
            <Link to='/Profile/MyProfile' style={{ marginRight: '14px', display: 'inline-block', width: '30px', height: '30px' }}><img src='user.png' alt='user icon' /></Link>
            <Link to='/Cart' style={{ display: 'inline-block', width: '30px', height: '30px' }}><img src='cart.png' alt='cart icon' /></Link>
        </div>

    </header>
}

export function Category(props) {
    return <Link to={props.link} style={{ height: '60px', backgroundColor: '#D6D9DC', color: '#3C3C3B', padding: '10px 40px', borderRadius: '30px', paddingTop: '12px' }} className='categoryText'>
        {props.name}
    </Link>
}

function NavigationSection(props) {
    return <div style={{ marginTop: props.top }}><Link to='#' className='highlightedNav'>{props.highlighted}</Link>
        {props.links.map((item, index) => <Link key={index} to={item.link} className="navA">{item.name}</Link>)}
    </div>
}

export function Navigation() {
    const section1 = [{ name: 'Романтична проза', link: '#' },
    { name: 'Історична та пригодницька проза', link: '#' },
    { name: 'Детективи', link: '#' },
    { name: 'Трилери та жахи', link: '#' },
    { name: 'Фантастика', link: '#' },
    { name: 'Фентезі', link: '#' },
    { name: 'Класична література', link: '#' },
    { name: 'Комікси та манґи', link: '#' }]
    const section2 = [{ name: 'Історія, факти та біографії', link: '#' },
    { name: 'Психологія', link: '#' },
    { name: 'Саморозвиток, мотивація', link: '#' },
    { name: 'Бізнес-література', link: '#' },
    { name: 'Дозвілля та Хобі', link: '#' },
    { name: 'Наукпоп', link: '#' },
    { name: 'Езотерика, таро', link: '#' }]
    const section3 = [{ name: 'Дітям до 4-х років', link: '#' },
    { name: 'Дітям 4-6 років', link: '#' },
    { name: 'Дітям 7-12 років', link: '#' },
    { name: 'Дітям від 12 років', link: '#' },
    { name: 'Шкільна та Навчальна', link: '#' },
    { name: 'Розвиваючі книги', link: '#' },
    { name: 'Казки і повісті', link: '#' }]
    const section4 = [{ name: 'Ексклюзивно у КСД', link: '#' },
    { name: 'Книжки місяця', link: '#' },
    { name: 'Новинки КСД', link: '#' },
    { name: 'Анонси КСД', link: '#' },
    { name: 'Новинки партнерів', link: '#' },
    { name: 'Хіти продажу', link: '#' },
    { name: 'Закладки для книжок', link: '#' },
    { name: 'Розпродаж', link: '#' },
    { name: 'Останні примірники', link: '#' },
    { name: 'Тимчасово немає у продажу', link: '#' }]
    return <div>
        <nav>
            <Link to='#' className='highlightedNav'>Художні</Link>
            <NavigationSection highlighted='Сучасні автори' links={section1} top='10px'></NavigationSection>
            <NavigationSection highlighted='Прикладні' links={section2} top='17px'></NavigationSection>
            <NavigationSection highlighted='Дитячі' links={section3} top='17px'></NavigationSection>
            <NavigationSection highlighted='Спецпропозиції' links={section4} top='17px'></NavigationSection>
        </nav>
        <p className='title' style={{ paddingLeft: '14px', marginTop: '32px' }}>Книгарні КСД</p>
        <img src='shopsMap.png' style={{ width: '192px', marginTop: '32px', marginLeft: '14px' }} alt='map'></img>
    </div>
}

export function CarouselCard(props) {
    return <div className='carouselCard'>
        <p style={{ fontSize: '14px', lineHeight: '12px', backgroundColor: '#B53535', color: '#FFFFFF', padding: '4px 14px', display: 'inline', borderRadius: '60px', zIndex: '2', position: 'absolute', marginTop: '-10px', marginLeft: '75px' }}>{props.special}</p>
        <img src={props.cover} alt='book cover'></img>
        <p style={{ color: '#B53535', margin: '0', height: '50px', display: 'flex', alignItems: 'flex-end' }}>{props.name}</p>
        <p style={{ color: '#686868', marginTop: '10px', marginBottom: '24px' }}>{props.author}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <p style={{ color: '#3C3C3B', textDecoration: 'line-through #3C3C3B', margin: '0' }}>{props.oldPrice}</p>
            <p className='big' style={{ color: '#B53535', margin: '0' }}>{props.price} ГРН</p>

        </div>
    </div>
}

export function Separator(props) {
    return <div style={{ width: '100%', height: '89px', backgroundColor: props.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: '#FFFFFF', margin: '0' }}>{props.text}</h2>
    </div>
}

export function NewsCard(props) {
    return <div style={{ width: '944px', height: '130px', padding: '10px', display: 'flex', gap: '60px' }}>
        <img src={props.image} alt='news image' style={{ border: '2px solid #B53535', borderRadius: '20px' }}></img>
        <div>
            <p className='newsText' style={{ margin: '0', marginBottom: '20px' }}>{props.date}</p>
            <p className='newsTitle' style={{ margin: '0', marginBottom: '10px' }}>{props.title}</p>
            <p className='newsText' style={{ margin: '0' }}>{props.description}</p>
            <p className='newsRating' style={{ margin: '0', marginTop: '20px' }}>Всього оцінили: {props.raters} люд. Середня оцінка: {props.rating}</p>
        </div>
    </div>
}

export function News(props) {
    return <section style={{ position: 'relative', marginTop: props.top }}>
        <img src='newsPerson.png' alt='Person Shopping' style={{ position: 'absolute', top: '349px', left: '1300px', zIndex: '2' }}></img>
        <Separator color='#B53535' text="Новини КСД"></Separator>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', width: '944px', margin: '0 auto', marginTop: '31px' }}>
            {props.news.map((item) => <NewsCard image={item.image} date={item.date} title={item.title} description={item.description} raters={item.raters} rating={item.rating}></NewsCard>)}
        </div>

    </section>

}

export function MainPage() {
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
        <Outlet />
        {/* <div className='wrapper'>
            <Navigation></Navigation>
            <main>
                <Outlet />
            </main>

        </div> */}
        
    </>
}