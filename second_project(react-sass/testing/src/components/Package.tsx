import yeas from '../assets/eaes.png'
import seting__monitor from '../assets/setting__monitor.png'

const Package = () => {
  return (
    <div className='package'>
        <div className="container">
        <div className="package__title">Формат поставки</div>
        <div className="package__inner">
        <div className="package__block">
            <div className="package__img"><img src={yeas} alt="" /></div>
            <div className="package__text">Мониторинг защищённости <br /> веб-ресурса</div>
        </div>
        <div className="package__block">
            <div className="package__img"><img src={seting__monitor} alt="" /></div>
            <div className="package__text">Поставка ПО</div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Package