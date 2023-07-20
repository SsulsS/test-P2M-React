import flag from "../images/Flag.svg"
import usaFlag from "../images/usaflag.svg"

function Popup (props) {
    return(
        <div className={`footer-popup ${props.isOpen ? `footer-popup_opened`: ""}`}>
            <div className="footer-popup__overlay" onClick={props.onClose}></div>
            <div className="footer-popup__container">
                <div className="footer-popup__elements-container footer-popup__elements-container_active">
                    <img src={flag} alt="флагРу" className="footer-popup__image"/>
                    <p className="footer-popup__sign">RU</p>
                    <p className="footer-popup__text">Русский</p>
                </div>
                <div className="footer-popup__elements-container">
                    <img src={usaFlag} alt="ФлагИнг" className="footer-popup__image"/>
                    <p className="footer-popup__sign">EN</p>
                    <p className="footer-popup__text">Английский</p>
                </div>
            </div>
        </div>
    )
}

export default Popup