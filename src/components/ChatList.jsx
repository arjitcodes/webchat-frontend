//components
import Chat from './chat'

//css
import '../css/chatList.css'

//icons
import { AiOutlineSearch } from 'react-icons/ai'


const ChatList = () => {
    return (
        <div id="chatList">
            <div className="nav">
                <div className="logo"><img src="./logo.png" alt="" /></div>
                <div className="search"><AiOutlineSearch /></div>
            </div>
            <div className="chats">
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
                <Chat />
            </div>
        </div>
    )
}

export default ChatList