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
        <Link to='/' id='logo'><img src='/logo.png' alt='logo' style={{ width: '100%' }} /></Link>
        <div className='search'>
            <input type='text' placeholder='Пошук товарів, категорій' style={{ height: '1.1458vw' }} />
            <button style={{ width: '2.5vw', aspectRatio: '1 / 1', backgroundColor: '#B53535', borderRadius: '50%', border: 'none', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><img src='/search.png' alt='search icon' style={{ width: '0.9375vw', aspectRatio: '1 / 1' }} /></button>
        </div>
        <div id='headerIcons'>
            <Link to='/Profile/' style={{ width: '1.5625vw' }}><img src='/user.png' alt='user icon' style={{ width: '100%' }} /></Link>
            <Link to='/Cart' style={{ width: '1.5625vw' }}><img src='/cart.png' alt='cart icon' style={{ width: '100%' }} /></Link>
            <div class="menuDiv">
                <input id="menuToggle" type="checkbox" />
                <label class="menuButton" for="menuToggle">
                    <span></span>
                </label>
                <Navigation id='burgerMenu'></Navigation>
            </div>
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

export function Navigation(props) {
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
    return <div id={props.id}>
        <nav>
            <Link to='/Fiction' className='highlightedNav'>Художні</Link>
            <NavigationSection highlighted='Сучасні автори' highligtedLink='/ContemporaryAuthors' links={section1} top='0.52vw'></NavigationSection>
            <NavigationSection highlighted='Прикладні' highligtedLink='/Practical' links={section2} top='0.89vw'></NavigationSection>
            <NavigationSection highlighted='Дитячі' highligtedLink='/Children' links={section3} top='0.89vw'></NavigationSection>
            <NavigationSection highlighted='Спецпропозиції' highligtedLink='/Special' links={section4} top='0.89vw'></NavigationSection>
        </nav>
        <Link to='/BookShops' style={{ textDecoration: 'none', color: '#3C3C3B' }}><p className='title' style={{ paddingLeft: '0.73vw', marginTop: '1.66vw' }}>Книгарні КСД</p>
            <img src='/shopsMap.png' style={{ width: '10vw', marginTop: '1.66vw', marginLeft: '0.73vw' }} alt='map'></img></Link>
    </div>
}

export function Separator(props) {
    return <div style={{ width: '100%', height: '4.64vw', backgroundColor: props.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2 style={{ color: '#FFFFFF', margin: '0' }}>{props.text}</h2>
    </div>
}

export function NewsCard(props) {
    return <Link to={props.link} style={{ width: '49.16vw', height: '6.77vw', padding: '0.52vw', display: 'flex', gap: '3.125vw', textDecoration: 'none' }}>
        <img src={props.image} alt='news image' style={{ border: '0.1vw solid #B53535', borderRadius: '1vw', aspectRatio: '1 / 1', width: '5.208vw' }}></img>
        <div>
            <p className='newsText' style={{ margin: '0', marginBottom: '1.0416vw' }}>{props.date}</p>
            <p className='newsTitle' style={{ margin: '0', marginBottom: '0.52vw' }}>{props.title}</p>
            <p className='newsText' style={{ margin: '0' }}>{props.description}</p>
            <p className='newsRating' style={{ margin: '0', marginTop: '1.0416vw' }}>Всього оцінили: {props.raters} люд. Середня оцінка: {props.rating}</p>
        </div>
    </Link>
}

export function News(props) {
    return <section style={{ position: 'relative', marginTop: props.top }}>
        <img src='/newsPerson.png' alt='Person Shopping' style={{ position: 'absolute', top: '17.2vw', left: '67.7vw', zIndex: '2', width: '25.2vw' }}></img>
        <Separator color='#B53535' text="Новини КСД"></Separator>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.52vw', justifyContent: 'center', width: '49.16vw', margin: '0 auto', marginTop: '1.615vw' }}>
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
        <div style={{ position: 'relative', height: '19.79vw', width: props.info.width, margin: '0 auto' }}>
            <button onClick={handlePrev} style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', zIndex: 2, outline: 'none' }} onFocus={(e) => e.target.style.outline = 'none'}>
                <img src="/left.png" alt="Previous" style={{ width: '0.89vw', height: '1.71875vw' }} />
            </button>

            <div ref={carouselRef} className="books-covers-carousel" style={{ height: '100%', width: props.info.carouselWidth, margin: '0 auto' }}>
                {props.info.covers.map((item, index) => (
                    <div key={index} className="book-cover-cell" style={{ height: '100%', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Link to={item.link}><img src={item.cover} alt={item.cover} style={{ width: 'auto', marginRight: item.mRight, height: item.height }} /></Link>
                    </div>
                ))}
            </div>
            <button onClick={handleNext} style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', zIndex: 10, outline: 'none' }} onFocus={(e) => e.target.style.outline = 'none'}>
                <img src='/right.png' alt="Next" style={{ width: '0.89vw', height: '1.71875vw' }} />
            </button>
        </div>
    );
}

const resentBooks = [
    {
        width: '79.16vw', carouselWidth: '67.8125vw', covers:
            [
                { cover: '/witcherSlider.png', height: '14.583vw', mRight: '4.427vw', link: '/Fiction/WitcherCollection' },
                { cover: '/creativeSlider.png', height: '14.583vw', mRight: '4.427vw', link: '/Practical/CreativeAct' },
                { cover: '/gastroSlider.png', height: '14.583vw', mRight: '4.427vw', link: '/Practical/GastroObscura' },
                { cover: '/puaroSlider.png', height: '14.583vw', mRight: '4.427vw', link: '/Fiction/Detectives/AgathaChristieCollection' },
                { cover: '/yuriySlider.png', height: '14.583vw', mRight: '4.427vw', link: '/Fiction/HistoryAndAdventures/YuriyDatsenkoCollection' },
                { cover: '/littleFriendSlider.png', height: '14.583vw', mRight: '4.427vw', link: '/ContemporaryAuthors/LittleFriend' },
                { cover: '/notesOfHatredSlider.png', height: '14.583vw', mRight: '4.427vw', link: '/Romance/HateNotes' },
                { cover: '/howLongSlider.png', height: '14.583vw', mRight: '4.427vw', link: '/Practical/PopularScience/ComeTogether' },
                { cover: '/detectiveSlider.png', height: '14.583vw', mRight: '4.427vw', link: '/Fiction/Detectives/Detective' },
                { cover: '/fanSlider.png', height: '14.583vw', mRight: '4.427vw', link: '/ContemporaryAuthors/HighFidelity' }
            ]
    }

];

export function ResentlyViewed() {
    return <section style={{ marginTop: '4vw' }}>
        <Separator color='#B53535' text="Нещодавно ви дивилися"></Separator>
        <BooksCoversCarousel info={resentBooks[0]}></BooksCoversCarousel>
    </section>
}

export function Footer() {
    return <footer style={{ position: 'relative', marginTop: '3.593vw' }}>
        <img src='/Bag.png' alt='Bag' style={{ position: 'absolute', bottom: '0', right: '0', width: '24.21875vw' }}></img>
        <div className='footerTopContainer' style={{ marginBottom: '4.6875vw' }}>
            <div className='footerContainer'>
                <div className='footerSection' style={{ width: '21.4vw' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '2.7vw' }}>
                        <img src='/tabler-icon-truck-delivery.png' alt='iconTruck' style={{ marginRight: '0.52vw', height: '2.7vw' }}></img>
                        <h3>Способи доставки</h3>
                    </div>
                    <p><Link to='https://novaposhta.ua' className='footerLink'>Відділення Нової пошти</Link></p>
                    <p><Link to='https://novaposhta.ua' className='footerLink'>Поштомат Нової пошти</Link></p>
                    <p><Link to='https://ua.meest.com' className='footerLink'>Кур'єр Meest</Link></p>
                    <p><Link to='https://www.ukrposhta.ua' className='footerLink'>Відділення Укрпошти</Link></p>
                    <p><Link to='/FreeDelivery' className='footerLink'>Безкоштовна доставка*</Link></p>
                    <img src='/UKR.png' alt='iconVisa' style={{ marginTop: '2.395vw', width: '12.3958vw' }}></img>
                </div>

                <div className='footerSection' style={{ width: '12.5vw' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '2.7vw' }}>
                        <img src='/tabler-icon-home.png' alt='iconHome' style={{ marginRight: '0.52vw', height: '2.7vw' }}></img>
                        <h3>Про КСД</h3>
                    </div>
                    <p><Link to='/News' className='footerLink'>Новини</Link></p>
                    <p><Link to='/Dovidgest' className='footerLink'>Книжковий довіджест</Link></p>
                    <p><Link to='/Special/AnnouncementsKSD' className='footerLink'>Анонси</Link></p>
                </div>

                <div className='footerSection' style={{ width: '20.1vw' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '2.7vw' }}>
                        <img src='/tabler-icon-address-book.png' alt='iconAddress' style={{ marginRight: '0.52vw', height: '2.7vw' }}></img>
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
                <div className='footerSection' style={{ width: '19.53vw' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '2.7vw' }}>
                        <img src='/tabler-icon-cash-banknote.png' alt='iconBanknote' style={{ marginRight: '0.52vw', height: '2.7vw' }}></img>
                        <h3>Способи оплати</h3>
                    </div>
                    <p><Link to='/OnlinePayment' className='footerLink'>Оплата картою онлайн</Link></p>
                    <p><Link to='/OnDeliveryPayment' className='footerLink'>Оплата на момент отримання</Link></p>
                    <img src='/Visa.png' alt='Visa' style={{ width: '12.3958vw' }}></img>
                </div>

                <div className='footerSection' style={{ width: '16.979vw' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '2.7vw' }}>
                        <img src='/tabler-icon-question-mark.png' alt='iconQuestion' style={{ marginRight: '0.52vw', height: '2.7vw' }}></img>
                        <h3>Є питання?</h3>
                    </div>
                    <p><Link to='/FAQ' className='footerLink'>Як замовити?</Link></p>
                    <p><Link to='/FAQ' className='footerLink'>Доставка, оплата</Link></p>
                    <p><Link to='/FAQ' className='footerLink'>Налаштування</Link></p>
                    <p><Link to='/FAQ' className='footerLink'>Порядок повернення товарів</Link></p>
                    <p><Link to='/FAQ' className='footerLink'>Постійним клієнтом</Link></p>
                </div>

                <div className='footerSection' style={{ width: '10.73vw' }}>
                    <div style={{ display: 'flex', gap: '0.72vw', marginBottom: '1.25vw' }}>
                        <a href='https://www.instagram.com/'>
                            <img src='/instagram.png' alt='instagram' style={{ width: '1.5625vw', aspectRatio: '1 / 1' }}></img>
                        </a>
                        <a href='https://web.telegram.org'>
                            <img src='/tg.png' alt='telegram' style={{ width: '1.5625vw', aspectRatio: '1 / 1' }}></img>
                        </a>
                        <a href='https://www.viber.com'>
                            <img src='/viber.png' alt='viber' style={{ width: '1.5625vw', aspectRatio: '1 / 1' }}></img>
                        </a>
                        <a href='https://twitter.com'>
                            <img src='/twitter.png' alt='twitter' style={{ width: '1.5625vw', aspectRatio: '1 / 1' }}></img>
                        </a>
                        <a href='https://www.tiktok.com'>
                            <img src='/tiktok.png' alt='tiktok' style={{ width: '1.5625vw', aspectRatio: '1 / 1' }}></img>
                        </a>
                    </div>

                    <img src='/BottegaVerde.png' alt='BottegaVerde' style={{ width: '9.21875vw' }} />
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
                <img src='/pathIcon.png' alt="Path icon" style={{ width: '0.83vw', height: '0.83vw', marginRight: '0.52vw', marginLeft: '0.52vw' }} />
                <Link to={path} className='pathText'>{label}</Link>
            </span>
        );
    });

    return (
        <div style={{ display: 'flex', alignItems: 'center', width: props.width, padding: '0.52vw', margin: '0 auto', marginTop: props.mTop }}>
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
