import twiter from '../assets/twiter.svg'
import facebook from '../assets/facebook.svg'
import wk from '../assets/wk.svg'
const Footer = () => {
  return (
    <div className="footer">
        <div className="container">
            <div className="footer__inner">
                <div className="footer__block footer__blocks">
                    <div className="footer__questions">Есть вопросы? <br />Напишите или позвоните нам.</div>
                    <div className="footer__tel"><a href="tel:+7 (495) 532-98-18">Тел.: +7 (495) 532-98-18</a></div>
                    <a href="mailto:sales@avl.am" className="footer__email">E-mai sales@avl.am</a>
                </div>
                <div className="footer__block">
                    <div className="footer__text">
                        <p><b>ВНИМАНИЕ!</b> <br />
                         Сервис ЛавинаСканер предназначен исключительно для защиты <br /> интернет-проектов и может быть использован только в правомерных целях.</p>
                         <p>Мы в социальных сетях:</p>
                    </div>
                    <div className="footer__social">
                        <a href="#"><img src={twiter}/></a>
                        <a href="#"><img src={facebook}/></a>
                        <a href="#"><img src={wk}/></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer