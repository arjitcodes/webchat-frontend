//components
import ChattingBody from "./ChattingBody"
import ChattingNav from "./chattingNav"

//csss
import "../css/chatBox.css"


const ChattingBox = () => {
  return (
    <div id="chatBox">
        <ChattingNav/>
        <ChattingBody/>
    </div>
  )
}

export default ChattingBox