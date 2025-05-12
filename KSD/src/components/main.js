import React, { useEffect, useRef } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Flickity from 'flickity';
import 'flickity/css/flickity.css';

export function ScrollingText() {
    const discountArray = ['Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн', 'Безкоштовно* від 790 грн']
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
    return <Link to={props.link} className='categoryText'>
        {props.name}
    </Link>
}


function NavigationSection(props) {
    return <div style={{ marginTop: props.top }}><Link to={props.highligtedLink} className='highlightedNav'>{props.highlighted}</Link>
        {props.links.map((item, index) => <Link key={index} to={item.link} className="navA">{item.name}</Link>)}
    </div>
}

export function Navigation() {
    const section1 = [{ name: 'Романтична проза', link: '/Fiction//Romance' },
    { name: 'Історична та пригодницька проза', link: '/Fiction/HistoryAndAdventures' },
    { name: 'Детективи', link: '/Fiction/Detectives' },
    { name: 'Трилери та жахи', link: '/Fiction/Thrillers' },
    { name: 'Фантастика', link: '/Fiction/ScienceFiction' },
    { name: 'Фентезі', link: '/Fiction/Fantasy' },
    { name: 'Класична література', link: '/Fiction/Classic' },
    { name: 'Комікси та манґи', link: '/Fiction/ComicsAndManga' }]
    const section2 = [{ name: 'Історія, факти та біографії', link: '/Practical/HistoryFactsBiographies' },
    { name: 'Психологія', link: '/Practical/Psychology' },
    { name: 'Саморозвиток, мотивація', link: '/Practical/SelfDevelopmentMotivation' },
    { name: 'Бізнес-література', link: '/Practical/BusinessLiterature' },
    { name: 'Дозвілля та Хобі', link: '/Practical/LeisureHobbies' },
    { name: 'Наукпоп', link: '/Practical/PopularScience' },
    { name: 'Езотерика, таро', link: '/Practical/EsotericismTarot' }]
    const section3 = [{ name: 'Дітям до 4-х років', link: '/Children/Under4' },
    { name: 'Дітям 4-6 років', link: '/Children/4To6' },
    { name: 'Дітям 7-12 років', link: '/Children/7To12' },
    { name: 'Дітям від 12 років', link: '/Children/12Plus' },
    { name: 'Шкільна та Навчальна', link: '/Children/SchoolEducational' },
    { name: 'Розвиваючі книги', link: '/Children/DevelopmentalBooks' },
    { name: 'Казки і повісті', link: '/Children/FairyTalesStories' }]
    const section4 = [{ name: 'Ексклюзивно у КСД', link: '/ExclusiveKSD' },
    { name: 'Книжки місяця', link: '/Special/BooksOfTheMonth' },
    { name: 'Новинки КСД', link: '/Special/NewArrivalsKSD' },
    { name: 'Анонси КСД', link: '/Special/AnnouncementsKSD' },
    { name: 'Новинки партнерів', link: '/Special/PartnersNewArrivals' },
    { name: 'Хіти продажу', link: '/Special/Bestsellers' },
    { name: 'Закладки для книжок', link: '/Special/Bookmarks' },
    { name: 'Розпродаж', link: '/Special/Sale' },
    { name: 'Останні примірники', link: '/Special/LastCopies' },
    { name: 'Тимчасово немає у продажу', link: '/Special/TemporarilyOutOfStock' }]
    return <div>
        <nav>
            <Link to='/Fiction' className='highlightedNav'>Художні</Link>
            <NavigationSection highlighted='Сучасні автори' highligtedLink='/ContemporaryAuthors' links={section1} top='10px'></NavigationSection>
            <NavigationSection highlighted='Прикладні' highligtedLink='/Practical' links={section2} top='17px'></NavigationSection>
            <NavigationSection highlighted='Дитячі' highligtedLink='/Children' links={section3} top='17px'></NavigationSection>
            <NavigationSection highlighted='Спецпропозиції' highligtedLink='/Special' links={section4} top='17px'></NavigationSection>
        </nav>
        <Link to='/BookShops' style={{textDecoration: 'none', color: '#3C3C3B'}}><p className='title' style={{ paddingLeft: '14px', marginTop: '32px' }}>Книгарні КСД</p>
        <img src='/shopsMap.png' style={{ width: '192px', marginTop: '32px', marginLeft: '14px' }} alt='map'></img></Link>
    </div>
}

export function Separator(props) {
    return <div style={{ width: '100%', height: '89px', backgroundColor: props.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: '#FFFFFF', margin: '0' }}>{props.text}</h2>
    </div>
}

export function NewsCard(props) {
    return <Link to={props.link} style={{ width: '944px', height: '130px', padding: '10px', display: 'flex', gap: '60px', textDecoration: 'none' }}>
        <img src={props.image} alt='news image' style={{ border: '2px solid #B53535', borderRadius: '20px' }}></img>
        <div>
            <p className='newsText' style={{ margin: '0', marginBottom: '20px' }}>{props.date}</p>
            <p className='newsTitle' style={{ margin: '0', marginBottom: '10px' }}>{props.title}</p>
            <p className='newsText' style={{ margin: '0' }}>{props.description}</p>
            <p className='newsRating' style={{ margin: '0', marginTop: '20px' }}>Всього оцінили: {props.raters} люд. Середня оцінка: {props.rating}</p>
        </div>
    </Link>
}

export function News(props) {
    return <section style={{ position: 'relative', marginTop: props.top }}>
        <img src='/newsPerson.png' alt='Person Shopping' style={{ position: 'absolute', top: '349px', left: '1300px', zIndex: '2' }}></img>
        <img src='/newsPerson.png' alt='Person Shopping' style={{ position: 'absolute', top: '349px', left: '1300px', zIndex: '2' }}></img>
        <Separator color='#B53535' text="Новини КСД"></Separator>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', width: '944px', margin: '0 auto', marginTop: '31px' }}>
            {props.news.map((item) => <NewsCard image={item.image} date={item.date} title={item.title} description={item.description} raters={item.raters} rating={item.rating} link={item.link}></NewsCard>)}
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
                        <Link to={item.link}><img src={item.cover} alt={item.cover} style={{ width: 'auto', marginRight: item.mRight, height: item.height }} /></Link>
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
                { cover: '/witcherSlider.png', height: '280px', mRight: '85px', link: '/Fiction/WitcherCollection' },
                { cover: '/creativeSlider.png', height: '280px', mRight: '85px', link: '/Practical/CreativeAct' },
                { cover: '/gastroSlider.png', height: '280px', mRight: '85px', link: '/Practical/GastroObscura' },
                { cover: '/puaroSlider.png', height: '280px', mRight: '85px', link:'/Fiction/Detectives/AgathaChristieCollection' },
                { cover: '/yuriySlider.png', height: '280px', mRight: '85px', link: '/Fiction/HistoryAndAdventures/YuriyDatsenkoCollection' },
                { cover: '/littleFriendSlider.png', height: '280px', mRight: '85px', link: '' },
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
                    <p><Link to='https://novaposhta.ua' className='footerLink'>Відділення Нової пошти</Link></p>
                    <p><Link to='https://novaposhta.ua' className='footerLink'>Поштомат Нової пошти</Link></p>
                    <p><Link to='https://ua.meest.com' className='footerLink'>Кур'єр Meest</Link></p>
                    <p><Link to='https://www.ukrposhta.ua' className='footerLink'>Відділення Укрпошти</Link></p>
                    <p><Link to='/FreeDelivery' className='footerLink'>Безкоштовна доставка*</Link></p>
                    <img src='/UKR.png' alt='iconVisa' style={{ marginTop: '46px' }}></img>
                </div>

                <div className='footerSection' style={{ width: '240px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                        <img src='/tabler-icon-home.png' alt='iconHome' style={{ marginRight: '10px' }}></img>
                        <h3>Про КСД</h3>
                    </div>
                    <p><Link to='/News' className='footerLink'>Новини</Link></p>
                    <p><Link to='/Dovidgest' className='footerLink'>Книжковий довіджест</Link></p>
                    <p><Link to='/Special/AnnouncementsKSD' className='footerLink'>Анонси</Link></p>
                </div>

                <div className='footerSection' style={{ width: '386px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                        <img src='/tabler-icon-address-book.png' alt='iconAddress' style={{ marginRight: '10px' }}></img>
                        <h3>Контакти</h3>
                    </div>
                    <p>Адреса: «Книжковий Клуб», а/с 84, Харків, 61001</p>
                    <p>Тел.: <a href='tel:0800301090' className='footerLink'>0 800 301 090</a></p>
                    <p>Web: <a href='https://bookclub.ua' target='_blank'>bookclub.ua</a></p>
                    <p><Link to='/BookShops' className='footerLink'>Книгарні КСД</Link></p>
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
                    <p><Link to='/OnlinePayment' className='footerLink'>Оплата картою онлайн</Link></p>
                    <p><Link to='/OnDeliveryPayment' className='footerLink'>Оплата на момент отримання</Link></p>
                    <img src='/Visa.png' alt='Visa'></img>
                </div>

                <div className='footerSection' style={{ width: '326px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '50px' }}>
                        <img src='/tabler-icon-question-mark.png' alt='iconQuestion' style={{ marginRight: '10px' }}></img>
                        <h3>Є питання?</h3>
                    </div>
                    <p><Link to='/FAQ' className='footerLink'>Як замовити?</Link></p>
                    <p><Link to='/FAQ' className='footerLink'>Доставка, оплата</Link></p>
                    <p><Link to='/FAQ' className='footerLink'>Налаштування</Link></p>
                    <p><Link to='/FAQ' className='footerLink'>Порядок повернення товарів</Link></p>
                    <p><Link to='/FAQ' className='footerLink'>Постійним клієнтом</Link></p>
                </div>

                <div className='footerSection' style={{ width: '206px' }}>
                    <div style={{ display: 'flex', gap: '14px', marginBottom: '24px' }}>
                        <a href='https://www.instagram.com/'>
                            <img src='/instagram.png' alt='instagram' style={{ width: '30px', height: '30px' }}></img>
                        </a>
                        <a href='https://web.telegram.org'>
                            <img src='/tg.png' alt='telegram' style={{ width: '30px', height: '30px' }}></img>
                        </a>
                        <a href='https://www.viber.com'>
                            <img src='/viber.png' alt='viber' style={{ width: '30px', height: '30px' }}></img>
                        </a>
                        <a href='https://twitter.com'>
                            <img src='/twitter.png' alt='twitter' style={{ width: '30px', height: '30px' }}></img>
                        </a>
                        <a href='https://www.tiktok.com'>
                            <img src='/tiktok.png' alt='tiktok' style={{ width: '30px', height: '30px' }}></img>
                        </a>
                    </div>

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
            <Category link='/Fiction' name='Художні'></Category>
            <Category link='/Practical' name='Прикладні'></Category>
            <Category link='/Children' name='Дитячі'></Category>
            <Category link='/Special' name='Спецпропозиції'></Category>
            <Category link='/eBooks' name='eBooks'></Category>
            <Category link='/Special/AnnouncementsKSD' name='Анонси КСД'></Category>
        </div>
        <Outlet />
        <Footer></Footer>

    </>
}
