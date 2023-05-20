import home from '../assets/select-home.png'
import kepka from '../assets/select-kepka.png'
import monitor from '../assets/select-monitor.png'

const Select = () => {
  return (
    <div>
        <div className="select">
            <div className="container">
                <div className="select__inner">
                    <div className="select__block">
                        <img src={home} className="select__img" />
                        <p className="select__text">Для коммерческих <br /> компаний и банков</p>
                    </div>
                    <div className="select__block">
                        <img src={kepka} className="select__img" />
                        <p className="select__text">Для органов государственной <br /> власти, правоохранительных <br /> органов, силовых структур</p>
                    </div>
                    <div className="select__block">
                        <img src={monitor} className="select__img" />
                        <p className="select__text">Для студий разработчиков <br /> веб-приложений</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Select