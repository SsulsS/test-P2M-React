import React from "react"
import logo from "../images/PAY2ME.svg"
import prew from "../images/prew.png"
import arrowLeft from "../images/arrow-left.svg"
import arrowRight from "../images/arrow-right.svg"
import UsernameForm from "./UsernameForm";
import PasswordForm from "./PasswordForm"
import ErrorForm from "./ErrorForm"
import Chat from "./Chat";
import profiles from "../utils/profiles"

function Main(props){
    const [login, setLogin] =React.useState("");
    const [password, setPassword] =React.useState("");
    const [activeButton, setActiveButton] = React.useState(false);
    const [passwordActiveButton, setPasswordActiveButton] = React.useState(false);
    const [verify, setVerify] = React.useState(false);

    function checkVerify() {
        for (let i = 0; i < profiles.length; i++) {
            if (login == profiles[i].login && password == profiles[i].password) {
                setVerify(true);
            }
        }
    }

    function handleLoginChange(evt) {
        setLogin(evt.target.value)
        if (login.length >= 1){
            setActiveButton(true)
        }   else {
            setActiveButton(false)
        } 
        console.log(login);
    }

    function handlePasswordChange(evt) {
        setPassword(evt.target.value)
        if (password.length >= 1){
            setPasswordActiveButton(true)
        } else {
            setPasswordActiveButton(false)
        }     
    }

    function handleSubmit(evt) {
        evt.preventDefault();
    }

    function handlePassworFormClick() {
        checkVerify()
        if (!verify) {
            props.setIsPasswordFormOpen(false);
            props.setIsErrorFormOpen(true) 
        }
      }

    return (
        <>
        <main className="content">

        <div className="decor">
            <img src={prew} alt="фото" className="decor__image"/>
        </div>

        <button className="back-button" onClick={props.onClick}>
            <img src={arrowLeft} alt="Стрелка" className="back-button__image"/>
            Назад
        </button>

        <UsernameForm
            logo={logo}
            arrowRight={arrowRight}
            isOpen={props.isUsernameFormOpen}
            onClick={props.handleUsernameFormClick}
            onSubmit={handleSubmit}
            onChange={handleLoginChange}
            login={login}
            activeButton={activeButton}
        />
        <PasswordForm
            logo={logo}
            arrowRight={arrowRight}
            isOpen={props.isPasswordFormOpen}
            isPasswordFormOpen={props.handleOpenPasswordButtonClick}
            onClick={handlePassworFormClick}
            onChange={handlePasswordChange}
            onSubmit={handleSubmit}
            showPassword={props.isFormPasswordOpen}
            password={password}
            passwordActiveButton={passwordActiveButton}
        />
        <ErrorForm
            logo={logo}
            arrowRight={arrowRight}
            isOpen={props.isErrorFormOpen}
            onSubmit={handleSubmit}
            onClick={props.handleOpenPasswordErrorForm}
            showPassword={props.isErrorFormPasswordOpen}
            login={login}
            loginOnChange={handleLoginChange}
            password={password}
            passwordOnChange={handlePasswordChange}

        />
        

        <Chat />
        </main>
    </>
    )
}

export default Main