import "./Pages.css"

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input 
            type="text" 
            placeholder="jdoe09" 
            className="registerInput"/>
            <label>Email</label>
            <input 
            type="text" 
            placeholder="j.doe@gmail.com" 
            className="registerInput"/>
            <label>Password</label>
            <input 
            type="password" 
            placeholder="Password" 
            className="registerInput"/>
            <button className="registerButton">Sign Up</button>
        </form>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}
