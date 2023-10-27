import{BsThreeDotsVertical} from 'react-icons/bs'
import{IoCall} from 'react-icons/io5'
import{BsCameraVideoFill} from 'react-icons/bs'


//css

import "../css/chatNav.css"

const ChattingNav = () => {
    return (
        <div id='chatNav'>
            <div className='user'>
                <div className='profile-pic'><img src="./user.png" alt="" /></div>
                <div>
                <div className="name">Rahul</div>
                <div className="status">Online</div>
                </div>
            </div>
            <div className='actions'>
                <div><BsCameraVideoFill/></div>
                <div><IoCall/></div>
                <div><BsThreeDotsVertical/></div>
            </div>
        </div>
    )
}

export default ChattingNav