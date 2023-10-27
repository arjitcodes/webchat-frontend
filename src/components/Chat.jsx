import '../css/chat.css'

const chat = () => {
    return (
        <div className='single-chat'>
            <div className='chat-info'>
                <div className="profile-pic">
                    <img src="./user.png" alt="" />
                </div>
                <div className="user">
                    <div className="name">Varshita 😍</div>
                    <div className="recent-msg">New message</div>
                </div>
            </div>
            <div className="status"></div>
        </div>
    )
}

export default chat