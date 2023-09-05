import React from "react";
import Main from "./Main";
import Footer from "./Footer";
import Popup from "./Popup";

function App() {
  const [isUsernameFormOpen, setIsUsernameFormOpen] = React.useState(true)
  const [isPasswordFormOpen, setIsPasswordFormOpen] = React.useState(false)
  const [isErrorFormOpen, setIsErrorFormOpen] = React.useState(false)
  const [isPopupOpen, setIsPopupOpen] = React.useState(false)
  const [isErrorFormPasswordOpen, setIsErrorFormPasswordOpen] = React.useState(false)
  const [isFormPasswordOpen, setIsFormPasswordOpen] = React.useState(false)

  function handleBackButtonClick() {
    if (isErrorFormOpen){
      setIsPasswordFormOpen(true)
      setIsErrorFormOpen(false)
    } else if (isPasswordFormOpen) {
      setIsUsernameFormOpen(true)
      setIsPasswordFormOpen(false)
    }
  }

  function handleOpenPasswordErrorForm() {
    if (!isErrorFormPasswordOpen){
      setIsErrorFormPasswordOpen(true)
    } else{
      setIsErrorFormPasswordOpen(false)
    }
  }

  function handleOpenPasswordButtonClick() {
    if (!isFormPasswordOpen){
      setIsFormPasswordOpen(true)
    } else{
      setIsFormPasswordOpen(false)
    }
  }

  function handleUsernameFormClick() {
    setIsUsernameFormOpen(false);
    setIsPasswordFormOpen(true)
  }

  /*function handlePassworFormClick() {
    setIsPasswordFormOpen(false);
    setIsErrorFormOpen(true)
  }*/

  function handlePopupClick () {
    setIsPopupOpen(true)
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <>
    <Main
    onClick={handleBackButtonClick}

    isUsernameFormOpen={isUsernameFormOpen}
    handleUsernameFormClick={handleUsernameFormClick}

    isPasswordFormOpen={isPasswordFormOpen}
    setIsPasswordFormOpen={setIsPasswordFormOpen}
    //handlePassworFormClick={handlePassworFormClick}
    handleOpenPasswordButtonClick={handleOpenPasswordButtonClick}
    isFormPasswordOpen={isFormPasswordOpen}

    isErrorFormOpen={isErrorFormOpen}
    setIsErrorFormOpen={setIsErrorFormOpen}
    isErrorFormPasswordOpen={isErrorFormPasswordOpen}
    handleOpenPasswordErrorForm={handleOpenPasswordErrorForm}
    />
    <Footer
      onFooter = {handlePopupClick}
      onClose={closePopup}
      children = {<Popup
        isOpen={isPopupOpen}
        onClose={closePopup}
      />}
    />
    </>
  );
}

export default App;
