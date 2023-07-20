import React from "react"
import flag from "../images/Flag.svg"

function Footer(props){
    return (
        <footer className="footer">
   
    <div className="footer__text-container">
        <h2  className="footer__copyright">© PAY2ME 2023</h2>
        <p className="footer__text">ООО «Куарми» ИНН 7743364603</p>
        <p className="footer__text">Юридический адрес 125445, Г. Москва, Ул. Беломорская, Д. 11, К. 1/290</p>
    </div>
    
    <div className="footer__container">
        <div className="footer__link-container">
            <p className="footer__link-text">Политика конфиденциальности</p>
            <p className="footer__link-text">Пользовательское соглашение</p>
        </div>
        <button  type="button" className="footer__button" onClick={props.onFooter}>
            <img src={flag} alt="флаг" className="footer__button-image"/>
            Ru
        </button>

        {props.children}
    </div>
    
</footer>
    )
}

export default Footer;