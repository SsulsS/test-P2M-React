import AuthForm from "./AuthForm";

function ErrorForm(props) {
    return (
        <AuthForm
        logo={props.logo}
        title={"Что-то пошло не так"}
        subtitle={"Вы ввели неверный логин или пароль."}
        isOpen={props.isOpen}
        >
            <form name="login-form" className="form error-form" onSubmit={props.onSubmit} noValidate>
                <fieldset className="form__set form__set-error">
                    <label className="form__label">
                        <input type="text" value={props.login} onChange={props.loginOnChange} className="form__input form__input_type_login form__input-error form__input_type_error" id="mist-login-input" placeholder="Введите номер телефона" name="form-input-name"  required/>
                        <span className="form__span mist-password-input-error span-login">Возможно, электронная почта введена некорректно. Попробуйте ещё раз.</span>
                        
                    </label>
                    <button type="button" className="form__clear-button"></button>
                    <div className="form__container">
                        <label className="form__label">
                            <input type={`${props.showPassword ? `text` : `password`}`} value={props.password} onChange={props.passwordOnChange} className="form__input form__input_type_password form__input-error form__input_type_error" id="mist-password-input" placeholder="Введите пароль" name="form-input-name"  required/>
                            <span className="form__span mist-password-input-error span-password">Возможно, пароль введён некорректно. Попробуйте ещё раз.</span>
                        </label>
                        <button type="button" className="form__clear-button"></button>
                        <button type="button" className={`form__hide-button ${props.showPassword ? `form__hide-button_active` : ""}`} onClick={props.onClick}></button>
                    </div>
                    <button type="submit" className="form__button form__submit" name="form-button">
                        Далее
                        <img src={props.arrowRight} alt="Стрелка"/>
                    </button>
                </fieldset>
            </form>
        </AuthForm>
    )
}

export default ErrorForm;