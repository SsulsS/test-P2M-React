import React from "react"
import logo from "../images/PAY2ME.svg"
import prew from "../images/prew.png"
import arrowLeft from "../images/arrow-left.svg"
import arrowRight from "../images/arrow-right.svg"
import chatImg from "../images/chat.svg"


function Main(){
    return (
        <>
        <main className="content">

            <div className="decor">
            <img src={prew} alt="фото" className="decor__image"/>
            </div>

        <button className="back-button">
            <img src={arrowLeft} alt="Стрелка" className="back-button__image"/>
            Назад
        </button>

            <section className="auth auth_opened">
            <img src={logo} alt="логотип" className="auth__logo"/>
            <div className="auth__title-container">
                <h2 className="auth__title">Войти в личный кабинет</h2>
                <p className="auth__subtitle">Войдите, чтобы начать использовать платёжные решения PAY2ME.</p>
            </div>

            <form name="login-form" className="form login-form" noValidate>
                <fieldset className="form__set">
                    <label className="form__label">
                        <input type="text" className="form__input form__input_type_name form__input_type_login " id="login-input" placeholder="Введите номер телефона" name="form-input-name" required/>
                        <span className="form__span form__input-error login-input-error"></span>
                    </label>
                    <button type="submit" className="form__button form__submit" name="form-button">
                        Далее
                        <img src={arrowRight} alt="Стрелка"/>
                    </button>
                </fieldset>
            </form>

            <div className="auth__text-container">
                <p className="auth__text">У вас ещё нет аккаунта?</p>
                <p className="auth__link">Зарегистрироваться</p>
            </div>
            <div className="auth__text-container">
                <p className="auth__text">Возникли проблемы со входом?</p>
                <p className="auth__link">Восстановить доступ</p>
            </div>
        </section>

        <section className="auth">
            <img src="./images/PAY2ME.svg" alt="логотип" className="auth__logo"/>
            <div className="auth__title-container">
                <h2 className="auth__title">Здравствуйте!</h2>
                <p className="auth__subtitle">Введите пароль</p>
            </div>

            <form name="login-form" className="form password-form" noValidate>
                <fieldset className="form__set">
                    <label className="form__label">
                        <input type="password" className="form__input form__input_type_password" id="password-input" placeholder="Введите пароль" name="form-input-name"  required/>
                        <span className="form__span form__input-error password-input-error"></span>
                    </label>
                    <button type="button" className="form__hide-button"></button>
                    <button type="submit" className="form__button form__submit" name="form-button">
                        Далее
                        <img src="./images/arrow-right.svg" alt="Стрелка"/>
                    </button>
                </fieldset>
            </form>

            <div className="auth__text-container">
                <p className="auth__text">У вас ещё нет аккаунта?</p>
                <p className="auth__link">Зарегистрироваться</p>
            </div>
            <div className="auth__text-container">
                <p className="auth__text">Возникли проблемы со входом?</p>
                <p className="auth__link">Восстановить доступ</p>
            </div>
        </section>

        <section className="auth">
            <img src="./images/PAY2ME.svg" alt="логотип" className="auth__logo"/>
            <div className="auth__title-container">
                <h2 className="auth__title">Что-то пошло не так</h2>
                <p className="auth__subtitle">Вы ввели неверный логин или пароль.</p>
            </div>

            <form name="login-form" className="form error-form" noValidate>
                <fieldset className="form__set form__set-error">
                    <label className="form__label">
                        <input type="text" className="form__input form__input_type_login form__input-error form__input_type_error" id="mist-login-input" placeholder="Введите номер телефона" name="form-input-name"  required/>
                        <span className="form__span mist-password-input-error span-login">Возможно, электронная почта введена некорректно. Попробуйте ещё раз.</span>
                        
                    </label>
                    <button type="button" className="form__clear-button"></button>
                    <div className="form__container">
                        <label className="form__label">
                            <input type="password" className="form__input form__input_type_password form__input-error form__input_type_error" id="mist-password-input" placeholder="Введите пароль" name="form-input-name"  required/>
                            <span className="form__span mist-password-input-error span-password">Возможно, пароль введён некорректно. Попробуйте ещё раз.</span>
                        </label>
                        <button type="button" className="form__clear-button"></button>
                        <button type="button" className="form__hide-button"></button>
                    </div>
                    <button type="submit" className="form__button form__submit" name="form-button">
                        Далее
                        <img src="./images/arrow-right.svg" alt="Стрелка"/>
                    </button>
                </fieldset>
            </form>

            <div className="auth__text-container">
                <p className="auth__text">У вас ещё нет аккаунта?</p>
                <p className="auth__link">Зарегистрироваться</p>
            </div>
            <div className="auth__text-container">
                <p className="auth__text">Возникли проблемы со входом?</p>
                <p className="auth__link">Восстановить доступ</p>
            </div>
        </section>

        <section className="chat">
            <div className="chat__container">
                <p className="chat__text">Нужна помощь?</p>
                <button className="chat__button">
                    <img src={chatImg} alt="Чат" className="chat__image"/>
                </button>
            </div>
        </section>
        </main>
    </>
    )
}

export default Main