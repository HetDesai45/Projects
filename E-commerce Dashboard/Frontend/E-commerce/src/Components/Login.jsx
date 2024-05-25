import { useState } from "react";

const Login = () =>{

  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  return(
    <div className="login">
      <h1>Login!</h1>
      <form action="">
        <input
          type="email"
          name="email"
          placeholder="Enter Email ID"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <input
          type="password"
          name="pass"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Login;