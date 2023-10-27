
import { AiFillHome } from "react-icons/ai";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUserGroup } from "react-icons/fa6";
import { BiSolidExtension } from "react-icons/bi";
import "../css/Nav.css"


const Nav = () => {
    return (
        <div id="Navbar">
            <ul id="">
                <li><AiFillHome/></li>
                <li><FaUserGroup/></li>
                <li><IoSettingsSharp/></li>
            </ul>
            <ul>
                <li><img src="/user.png" id="profileImg"/></li>
                <li><BiSolidExtension/></li>
            </ul>
        </div>
    )
}

export default Nav