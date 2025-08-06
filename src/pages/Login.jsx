import "./Pages.css"

export default function Login() {
  return (
    <div className="login">
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="j.doe@gmail.com" className="loginInput"/>
        <label>Password</label>
        <input type="password" placeholder="Password" className="loginInput"/>
        <button className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">Sign Up</button>
    </div>
  )
}
