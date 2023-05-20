import chel1 from '../assets/chel1.png'
import chel2 from '../assets/chel2.png'
import comment from '../assets/comment.png'
import design from '../assets/hero-design1.png'
import design2 from '../assets/hero-desing-2.png'

const Hero = () => {
return (
<div className="hero">
    <div className="container">
        <div className="hero__design"><img src={design}/></div>
        <div className="hero__blocks">
            <div className="hero__block"><img src={chel1} /></div>
            <div className="hero__block">
                <h2 className="hero__title">Поиск уязвимостей программной <br/> реализации</h2>
                <p className="hero__text">С другой стороны постоянное информационно-пропагандистское обеспечение нашей
                    деятельности влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в
                    отношении поставленных задач. </p>
            </div>
        </div>
        <div className="hero__blocks">
            <div className="hero__block">
            <h2 className="hero__title">Поиск уязвимостей администрирования</h2>
            <p className="hero__text">С другой стороны постоянное информационно-пропагандистское обеспечение нашей
                    деятельности влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в
                    отношении поставленных задач. </p>
            </div>
            <div className="hero__block"><img src={chel2} /></div>
        </div>
        <div className="hero__blocks">
            <div className="hero__design-2"><img src={design2}/></div>
            <div className="hero__block"><img src={comment} /></div>
            <div className="hero__block">
                <h2 className="hero__title">Поиск уязвимостей программной <br/> реализации</h2>
                <p className="hero__text hero-t-b">С другой стороны постоянное информационно-пропагандистское обеспечение нашей
                    деятельности влечет за собой процесс внедрения и модернизации позиций, занимаемых участниками в
                    отношении поставленных задач. </p>
                    <button className='header__button-zayavka'>ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
        </div>

    </div>

</div>
)
}

export default Hero