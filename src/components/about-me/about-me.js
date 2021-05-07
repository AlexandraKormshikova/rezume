import Image from '../../static/images/photo.jpg'
import './main-info.css'

const MainInfo = () => {
    return (
        <div className={'main-info'}>
            <div className={'main-info__image-container'}>
                <img src={Image} alt={'its me'} className='main-info__image' />
            </div>
            <div>
                <span className={'main-info__name'}>
                    Alexandra Kormshchikova
                </span>
                <span className={'main-info__item'}>
                    Career objective: (React || React native) developer
                </span>
                <span className={'main-info__item'}>
                    Contacts:
                </span>
                <ul>
                    <li>
                        <a href={'mailto:alexweasley06@gmail.com'} className={'main-info__item-link'}>
                            Email: alexweasley06@gmail.com
                        </a>
                    </li>
                    <li>
                        <a href={'tel:+79991206854'} className={'main-info__item-link'}>
                            Phone: +7 999 120-68-54
                        </a>
                    </li>
                    <li>
                        <a href={'https://t.me/Alex_Krmsh'} className={'main-info__item-link'}>
                            Telegram: +7 922 960-09-16
                        </a>
                    </li>
                </ul>
                <span className={'main-info__item'}>
                    Languages:
                </span>
                <ul>
                    <li>
                        <span className={'main-info__item-link'}>
                            Russian (Native)
                        </span>
                    </li>
                    <li>
                        <span className={'main-info__item-link'}>
                            English (Limited Working Proficiency)
                        </span>
                    </li>
                    <li>
                        <span className={'main-info__item-link'}>
                            Spanish (Elementary Proficiency)
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MainInfo