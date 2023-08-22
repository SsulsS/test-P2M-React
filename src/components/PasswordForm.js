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
                        <input type="password" className="form__input form__input_type_password" id="password-input" placeholder="Введите пароль" name="form-input-name"  required/>
                        <span className="form__span form__input-error password-input-error"></span>
                    </label>
                    <button type="button" className="form__hide-button" onClick={props.showPassword}></button>
                    <button type="submit" className="form__button form__submit" name="form-button" onClick={props.onClick}>
                        Далее
                        <img src={props.arrowRight} alt="Стрелка"/>
                    </button>
                </fieldset>
            </form>
        </AuthForm>
    )
}

export default PasswordForm;