import img from '../assets/header__img.png'
import header__img  from '../assets/header-img.jpg'
import button from '../assets/button__header.png'

const Header = () => {
  return (
    <header className='header'>
        {/* <div className="container"> */}
            <div className="header__inner">
                <div className="header__block_1">
                    <h1 className="header__logo">
                        <img src={header__img} alt="header__logo" /><br /> S C A N N E R
                    </h1>
                    <p className="header__text">Комплексная проверка безопасности <br /> и защита интернет-проектов</p>
                    <div className="header__button">
                        <button className='header__button-zayavka'>ОСТАВИТЬ ЗАЯВКУ</button>
                        <button className='header__button-watch'><img src={button} alt="" /> СМОТРЕТЬ ВИДЕО</button>
                    </div>
                </div>
                <div className="header__block">
                    <div className="header__img"><img className='header__ifmg' src={img} alt="juck" /></div>
                </div>
            </div>
        {/* </div> */}
    </header>
  )
}

export default Header