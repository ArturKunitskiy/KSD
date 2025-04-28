import React, { useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

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
        <Link to='/' style={{ width: '245px' }}><img src='/logo.png' alt='logo' /></Link>
        <div className='search'>
            <input type='text' placeholder='Пошук товарів, категорій' style={{ height: '22px' }} />
            <button style={{ width: '48px', height: '48px', backgroundColor: '#B53535', borderRadius: '50%', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src='/search.png' alt='search icon' style={{ width: '18px', height: '18px' }} /></button>
        </div>
        <div>
            <Link to='/Profile/' style={{ marginRight: '14px', display: 'inline-block', width: '30px', height: '30px' }}><img src='/user.png' alt='user icon' /></Link>
            <Link to='/Cart' style={{ display: 'inline-block', width: '30px', height: '30px' }}><img src='/cart.png' alt='cart icon' /></Link>
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
        <img src='/shopsMap.png' style={{ width: '192px', marginTop: '32px', marginLeft: '14px' }} alt='map'></img>
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
        <img src='/newsPerson.png' alt='Person Shopping' style={{ position: 'absolute', top: '349px', left: '1300px', zIndex: '2' }}></img>
        <Separator color='#B53535' text="Новини КСД"></Separator>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', width: '944px', margin: '0 auto', marginTop: '31px' }}>
            {props.news.map((item) => <NewsCard image={item.image} date={item.date} title={item.title} description={item.description} raters={item.raters} rating={item.rating}></NewsCard>)}
        </div>

    </section>
}

export function BooksCoversCarousel(props) {
    const carouselRef = useRef(null);
    const flktyRef = useRef(null);

    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const Flickity = require('flickity');
            flktyRef.current = new Flickity(carouselRef.current, {
                groupCells: 5,
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
        <div style={{ position: 'relative', height: '380px', width: props.info.width, margin: '0 auto' }}>
            <button onClick={handlePrev} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', zIndex: 2, outline: 'none' }} onFocus={(e) => e.target.style.outline = 'none'}>
                <img src="/left.png" alt="Previous" style={{ width: '17px', height: '33px' }} />
            </button>

            <div ref={carouselRef} className="books-covers-carousel" style={{ height: '100%', width: props.info.carouselWidth, margin: '0 auto' }}>
                {props.info.covers.map((item, index) => (
                    <div key={index} className="book-cover-cell" style={{ height: '100%', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Link to="/"><img src={item.cover} alt={item.cover} style={{ width: 'auto', marginRight: item.mRight, height: item.height }} /></Link>
                    </div>
                ))}
            </div>
            <button onClick={handleNext} style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', zIndex: 10, outline: 'none' }} onFocus={(e) => e.target.style.outline = 'none'}>
                <img src='/right.png' alt="Next" style={{ width: '17px', height: '33px' }} />
            </button>
        </div>
    );
}

const resentBooks = [
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

];

export function ResentlyViewed() {
    return <section style={{ marginTop: '41px' }}>
        <Separator color='#B53535' text="Нещодавно ви дивилися"></Separator>
        <BooksCoversCarousel info={resentBooks[0]}></BooksCoversCarousel>
    </section>
}

export function Footer() {
    return <footer style={{ position: 'relative', marginTop: '69px' }}>
        <img src='/Bag.png' alt='Bag' style={{ position: 'absolute', bottom: '0', right: '0' }}></img>
        <div className='footerTopContainer' style={{ marginBottom: '90px' }}>
            <div className='footerContainer'>
                <div className='footerSection' style={{ width: '411px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                        <img src='/tabler-icon-truck-delivery.png' alt='iconTruck' style={{ marginRight: '10px' }}></img>
                        <h3>Способи доставки</h3>
                    </div>
                    <p><Link to='/' className='footerLink'>Відділення Нової пошти</Link></p>
                    <p><Link to='/' className='footerLink'>Поштомат Нової пошти</Link></p>
                    <p><Link to='/' className='footerLink'>Кур'єр Meest</Link></p>
                    <p><Link to='/' className='footerLink'>Відділення Укрпошти</Link></p>
                    <p><Link to='/' className='footerLink'>Безкоштовна доставка*</Link></p>
                    <img src='/UKR.png' alt='iconVisa' style={{ marginTop: '46px' }}></img>
                </div>

                <div className='footerSection' style={{ width: '240px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                        <img src='/tabler-icon-home.png' alt='iconHome' style={{ marginRight: '10px' }}></img>
                        <h3>Про КСД</h3>
                    </div>
                    <p><Link to='/' className='footerLink'>Новини</Link></p>
                    <p><Link to='/' className='footerLink'>Книжковий довіджест</Link></p>
                    <p><Link to='/' className='footerLink'>Анонси</Link></p>
                </div>

                <div className='footerSection' style={{ width: '386px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                        <img src='/tabler-icon-address-book.png' alt='iconAddress' style={{ marginRight: '10px' }}></img>
                        <h3>Контакти</h3>
                    </div>
                    <p>Адреса: «Книжковий Клуб», а/с 84, Харків, 61001</p>
                    <p>Тел.: <a href='tel:0800301090' className='footerLink'>0 800 301 090</a></p>
                    <p>Web: <a href='https://bookclub.ua' target='_blank'>bookclub.ua</a></p>
                    <p><Link to='/' className='footerLink'>Книгарні КСД</Link></p>
                </div>
            </div>
        </div>

        <div className='footerBottomContainer'>
            <div className='footerContainer'>
                <div className='footerSection' style={{ width: '375px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                        <img src='/tabler-icon-cash-banknote.png' alt='iconBanknote' style={{ marginRight: '10px' }}></img>
                        <h3>Способи оплати</h3>
                    </div>
                    <p><Link to='/' className='footerLink'>Оплата картою онлайн</Link></p>
                    <p><Link to='/' className='footerLink'>Оплата на момент отримання</Link></p>
                    <img src='/Visa.png' alt='Visa'></img>
                </div>

                <div className='footerSection' style={{ width: '326px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                        <img src='/tabler-icon-question-mark.png' alt='iconQuestion' style={{ marginRight: '10px' }}></img>
                        <h3>Є питання?</h3>
                    </div>
                    <p><Link to='/' className='footerLink'>Як замовити?</Link></p>
                    <p><Link to='/' className='footerLink'>Доставка, оплата</Link></p>
                    <p><Link to='/' className='footerLink'>Налаштування</Link></p>
                    <p><Link to='/' className='footerLink'>Порядок повернення товарів</Link></p>
                    <p><Link to='/' className='footerLink'>Постійним клієнтом</Link></p>
                </div>

                <div className='footerSection' style={{ width: '206px' }}>
                    <img src='/Icons.png' alt='icons' style={{ display: 'block', marginBottom: '24px' }}></img>
                    <img src='/BottegaVerde.png' alt='BottegaVerde' />
                </div>
            </div>
        </div>
    </footer>
}

export function Path(props) {
    const location = useLocation();

    const pathMap = {
        '': 'Головна',
        'Cart': 'Кошик',
        'Physical': 'Фізичні товари',
        'Digital': 'Електронні товари',
        'Profile': 'Профіль',
        'Orders': 'Мої замовлення',
        'Wishlist': 'Список бажаного',
        'Authorize': 'Авторизація',
        'Fiction': 'Художня',
        'Thrillers': 'Трилери та жахи',
        'ContemporaryAuthors': 'Сучасні автори',
        'OrdinaryMonsters': 'Звичайні монстри'
    };

    const segments = location.pathname.split('/').filter(Boolean);

    const fullPath = segments.map((segment, index) => {
        const path = '/' + segments.slice(0, index + 1).join('/');
        const label = pathMap[segment] || segment;

        return (
            <span key={path} style={{ display: 'flex', alignItems: 'center' }}>
                <img src='/pathIcon.png' alt="Path icon" style={{ width: '16px', height: '16px', marginRight: '10px', marginLeft: '10px' }} />
                <Link to={path} className='pathText'>{label}</Link>
            </span>
        );
    });

    return (
        <div style={{ display: 'flex', alignItems: 'center', width: props.width, padding: '10px', margin: '0 auto 0 auto', marginTop: props.mTop }}>
            <Link to="/" className='pathText'>{pathMap['']}</Link>
            {fullPath}
        </div>
    );
};


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
        <Footer></Footer>

    </>
}
