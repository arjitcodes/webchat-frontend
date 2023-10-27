//css
import { useDispatch } from "react-redux";
import "../../css/login.css"
import { useLoginMutation } from "../../features/auth/authApiSlice"
import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { setCredentials } from "../../features/auth/authSlice";



const Login = () => {
  const userRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = await login({ user, pwd }).unwrap();
      console.log(userData.accessToken)
      dispatch(setCredentials({ accessToken: userData.accessToken }));
      setUser('');
      setPwd('');
      navigate('/')
    } catch (error) {
      console.log(error)
      if (!error.originalStatus) {
        setErrMsg("Server not response")
      } else if (error?.originalStatus === 400) {
        setErrMsg("Fill credentials")
      }
      else if (error?.originalStatus === 403) {
        setErrMsg("Invalid credentials")
      }
      else if (error?.originalStatus === 500) {
        setErrMsg("Server have some Issue ")
      }
    }
    console.log(errMsg);

  }



  useEffect(() => {
    userRef.current.focus();
  }, [])
  useEffect(() => {
    setErrMsg('')
  }, [user, pwd])


  return (
    <div id="login" >
      {/* <h1>Webchat Login</h1> */}
      <form >
        <input ref={userRef} type="text" placeholder="username or email" value={user} onChange={((e) => { setUser(e.target.value) })} />
        <input type="password" placeholder="password" value={pwd} onChange={((e) => { setPwd(e.target.value) })} autoComplete="" />
        <button onClick={handleLogin}>Login</button>
        <a href="/signup">Create new account</a>
      </form>
    </div>
  )
}

export default Login