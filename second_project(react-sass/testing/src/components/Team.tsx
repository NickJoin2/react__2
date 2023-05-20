import design__right from '../assets/team-design.png'
import design__left from '../assets/design-left.png'
const Team = () => {
return (
<div className="team">
    <div className="container">
        <div className="team__inner">
            <div className="team__block">
                <div className="team__title">Елена Ларина <br />
                    блог HRазведка</div>
                <div className="team__text">В России есть возможность <br /> решать задачу по защите <br /> веб-ресурсов без создания <br />
                    мощной, а соответственно <br /> дорогостоящей службы <br /> собственной информационной  <br /> безопасности”</div>
            </div>
            <div className="team__block">
                <div className="team__title">Павел Седаков <br />
                    журнал Forbes</div>
                <div className="team__text">Сканер оперативно проверяет <br /> сайты клиента на <br /> распространенные  уязвимости, <br />
                    засекает вирусы на страницах, <br /> выявляет типовые ошибки <br /> администрирования</div>
            </div>
            <div className="team__design"><img src={design__right}/></div>
            { <div className="team__design2"><img src={design__left}/></div> }
        </div>
        <div className="team__button">Оставить заявку</div>
    </div>
</div>
)
}

export default Team