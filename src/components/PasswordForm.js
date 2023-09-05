import AuthForm from "./AuthForm";

function PasswordForm(props) {
    return (
        <AuthForm
        logo={props.logo}
        title={"Здравствуйте!"}
        subtitle={"Введите пароль"}
        isOpen={props.isOpen}
        >
            <form name="login-form" className="form password-form" onSubmit={props.onSubmit} noValidate>
                <fieldset className="form__set">
                    <label className="form__label">
                        <input type={`${props.showPassword ? `text` : `password`}`} className="form__input form__input_type_password" id="password-input" placeholder="Введите пароль" name="form-input-name" onChange={props.onChange}  required/>
                        <span className="form__span form__input-error password-input-error"></span>
                    </label>
                    <button type="button" className={`form__hide-button ${props.showPassword ? `form__hide-button_active` : ""}`} onClick={props.isPasswordFormOpen}></button>
                    <button type="submit" className={`form__button form__submit ${props.passwordActiveButton ? `` : `form__button_inactive`}`} onClick={props.onClick}>
                        Далее
                        <img src={props.arrowRight} alt="Стрелка"/>
                    </button>
                </fieldset>
            </form>
        </AuthForm>
    )
}

export default PasswordForm;