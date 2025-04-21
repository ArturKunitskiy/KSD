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
        <img src='shopsMap.png' style={{ width: '192px', marginTop: '32px', marginLeft: '14px' }}></img>
    </div>
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
        <div className='wrapper'>
            <Navigation></Navigation>
            <main>
                <Outlet />
            </main>
        </div>


    </>
}