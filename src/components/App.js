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

  function handlePasswordButtonClick() {
    setIsFormPasswordOpen(true)
  }

  function handleUsernameFormClick() {
    setIsUsernameFormOpen(false);
    setIsPasswordFormOpen(true)
  }

  function handlePassworFormClick() {
    setIsPasswordFormOpen(false);
    setIsErrorFormOpen(true)
  }

  function handlePopupClick () {
    setIsPopupOpen(true)
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <>
    <Main
    isUsernameFormOpen={isUsernameFormOpen}
    handleUsernameFormClick={handleUsernameFormClick}

    isPasswordFormOpen={isPasswordFormOpen}
    handlePassworFormClick={handlePassworFormClick}
    handlePasswordButtonClick={handlePasswordButtonClick}
    isFormPasswordOpen={isFormPasswordOpen}

    isErrorFormOpen={isErrorFormOpen}
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
