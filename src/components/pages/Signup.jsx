//css
import { useEffect, useRef, useState } from "react"
import "../../css/signup.css"
import { useSignInMutation } from "../../features/auth/authApiSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setCredentials } from "../../features/auth/authSlice"
//icons
import { BsEyeSlash, BsEye } from 'react-icons/bs'

// const PWD_REGEX = new RegExp(`(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})`)


const Signup = () => {
  const [signIn, { isLoading }] = useSignInMutation();
  const [isPwdVisible, setIsPwdVisible] = useState(false);
  const nameRef = useRef();
  const pwdRef = useRef();
  // const [signUpState, setSignUpState] = useState("info")
  const [signInData, setSignInData] = useState({ name: "", email: "", pwd: "", bio: "" })
  const dispatch = useDispatch()
  const navigate = useNavigate()


  useEffect(() => {
    nameRef.current.focus();
  }, [])

  const handlePwdWarns = () => {
    const isStrongPwd = signInData.pwd.length >= 6;
    if (isStrongPwd) {
      pwdRef.current.style.color = 'green'
    } else {
      pwdRef.current.style.color = 'red'
    }
  }


  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userData = await signIn(signInData).unwrap();
      dispatch(setCredentials(...userData.accessToken, signInData.name))
      setSignInData({ name: "", email: "", pwd: "", bio: "" })
      navigate("/")

    } catch (error) {
      console.log(error)
      // console.log("hii")
    }
  }

  const handlePwdVisibity = () => {
    isPwdVisible ? setIsPwdVisible(false) : setIsPwdVisible(true)
  }

  return (
    <>
      {isLoading ? <h1>Loading</h1> :
        <div id="signUp">
          {/* {signUpState === "info" && */}
          {/* <img src="/login.jpg" alt="" height={100} /> */}
          <form >
            <input type="text" placeholder="name" onChange={(e) => { setSignInData({ ...signInData, name: e.target.value }) }} ref={nameRef} />
            <input type="text" placeholder="email" onChange={(e) => { setSignInData({ ...signInData, email: e.target.value }) }} />
            <div id="pwdDiv">
              <input type={isPwdVisible ? "text" : "password"} placeholder="password" onChange={(e) => { setSignInData({ ...signInData, pwd: e.target.value }); handlePwdWarns() }} onFocus={() => { pwdRef.current.style.visibility = 'visible' }} />
              {isPwdVisible ? <BsEye style={{ cursor: "pointer" }} onClick={handlePwdVisibity} /> : <BsEyeSlash style={{ cursor: "pointer" }} onClick={handlePwdVisibity} />}
            </div>
            <p ref={pwdRef} style={{ visibility: 'hidden' }} className="input-instructions">Password must be at least 6 characters long</p>

            <button onClick={handleSignIn}>Signup</button>
            {/* <button type="submit">Signup</button> */}
            <a href="/login">Already have a account</a>
          </form>
          {/* } */}
          {/* {
              signUpState === "profile" &&
              <form >
                <input type="file" name="" id="" />
                <button onClick={() => setSignUpState("bio")}>Signup</button>
                <button onClick={() => setSignUpState("bio")} >Skip</button>

              </form>
            }
            {
              signUpState === "bio" &&
              <form >
                <input type="text" name="" id="" onChange={(e) => { setSignInData({ ...signInData, bio: e.target.value }) }} />
                <button >Signup</button>

              </form>
            } */}
        </div>
      }
    </>
  )
}

export default Signup