import React from "react";
import AuthForm from "./AuthForm";

function UsernameForm(props) {

    return (
        <AuthForm
        logo={props.logo}
        title={"Войти в личный кабинет"}
        subtitle={"Войдите, чтобы начать использовать платёжные решения PAY2ME."}
        isOpen={props.isOpen}
        >
            <form name="login-form" className="form login-form" onSubmit={props.onSubmit} noValidate>
                <fieldset className="form__set">
                    <label className="form__label">
                        <input type="text" className="form__input form__input_type_name form__input_type_login " id="login-input" onChange={props.onChange} placeholder="Введите номер телефона" name="form-input-name" required/>
                        <span className="form__span form__input-error login-input-error"></span>
                    </label>
                    <button type="submit" className={`form__button form__submit ${props.activeButton ? `` : `form__button_inactive`}`} name="form-button" onClick={props.onClick}>
                        Далее
                        <img src={props.arrowRight} alt="Стрелка"/>
                    </button>
                </fieldset>
            </form>     
        </AuthForm>
    )
}

export default UsernameForm; 