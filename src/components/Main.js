import React from "react"
import logo from "../images/PAY2ME.svg"
import prew from "../images/prew.png"
import arrowLeft from "../images/arrow-left.svg"
import arrowRight from "../images/arrow-right.svg"
import UsernameForm from "./UsernameForm";
import PasswordForm from "./PasswordForm"
import ErrorForm from "./ErrorForm"
import Chat from "./Chat";

function Main(props){
    function handleSubmit(evt) {
        evt.preventDefault();
    }

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

        <UsernameForm
            logo={logo}
            arrowRight={arrowRight}
            isOpen={props.isUsernameFormOpen}
            onClick={props.handleUsernameFormClick}
            onSubmit={handleSubmit}
        />
        <PasswordForm
            logo={logo}
            arrowRight={arrowRight}
            isOpen={props.isPasswordFormOpen}
            isPasswordFormOpen={props.handlePasswordButtonClick}
            onClick={props.handlePassworFormClick}
            onSubmit={handleSubmit}
            showPassword={props.isFormPasswordOpen}
        />
        <ErrorForm
            logo={logo}
            arrowRight={arrowRight}
            isOpen={props.isErrorFormOpen}
            onSubmit={handleSubmit}
        />
        

        <Chat />
        </main>
    </>
    )
}

export default Main