//css
import { BsPlusCircleFill} from "react-icons/bs"
import "../css/msgInput.css"
import {IoSendSharp} from 'react-icons/io5'


const MsgInput = () => {
  return (
    <div id="msgInput">
      <input type="text" />
      <IoSendSharp/>
      <BsPlusCircleFill/>
    </div>
  )
}

export default MsgInput