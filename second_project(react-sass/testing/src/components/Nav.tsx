
import design from '../assets/design.png'
import vector from '../assets/vector.png'

const Nav = () => {
  return (
    <nav>
        <div className="container">
            <div className="nav__inner">

        <div className="nav__img"><a href="#s"><img src={design}/></a></div>
        <div className="nav_logo"><img src={vector} alt="logo" /></div>
        <ul className='nav__item'>
            <li><a className='nav__link' href="#s">Главная</a></li>
            <li><a className='nav__link' href="#s">Продукты</a></li>
            <li><a className='nav__link' href="#s">Технологии</a></li>
            <li><a className='nav__link' href="#s">Контакты</a></li>
        </ul>
        </div>
        </div>
    </nav>

  )
}

export default Nav