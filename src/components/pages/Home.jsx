import ChatList from "../ChatList"
import ChattingBox from "../ChattingBox"
import Nav from "../Nav"

const Home = () => {
    return (
        <>
        <Nav/>
        <div id="body">
            <ChatList />
            <ChattingBox/>
        </div>
        </>
    )
}

export default Home


