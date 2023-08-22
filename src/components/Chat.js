import chatImg from "../images/chat.svg"

function Chat(props) {
    return (
        <section className="chat">
            <div className="chat__container">
                <p className="chat__text">Нужна помощь?</p>
                <button className="chat__button">
                    <img src={chatImg} alt="Чат" className="chat__image"/>
                </button>
            </div>
        </section>
    )
}

export default Chat