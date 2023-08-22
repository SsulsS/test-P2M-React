function AuthForm(props) {
    return(
        <section className={`auth  ${props.isOpen ? `auth_opened`: ""}`}>
            <img src={props.logo} alt="логотип" className="auth__logo"/>
            <div className="auth__title-container">
                <h2 className="auth__title">{props.title}</h2>
                <p className="auth__subtitle">{props.subtitle}</p>
            </div>

            {props.children}

            <div className="auth__text-container">
                <p className="auth__text">У вас ещё нет аккаунта?</p>
                <p className="auth__link">Зарегистрироваться</p>
            </div>
            <div className="auth__text-container">
                <p className="auth__text">Возникли проблемы со входом?</p>
                <p className="auth__link">Восстановить доступ</p>
            </div>
        </section>
    )
}

export default AuthForm;

