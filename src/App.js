import React from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Popup from "./components/Popup";

function App() {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false)

  function handlePopupClick () {
    setIsPopupOpen(true)
  }

  function closePopup() {
    setIsPopupOpen(false);
  }

  return (
    <>
    <Main/>
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
