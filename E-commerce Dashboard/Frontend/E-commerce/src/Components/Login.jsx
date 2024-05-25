import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
      navigate('/');
    }
  })
  const loginuser = async () => {
    try {
      let result = await axios.post(
        "http://localhost:5000/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      localStorage.setItem("user", JSON.stringify(result));
      result = await JSON.stringify(result);
      result = await result.JSON();
      if (result.name) {
        navigate("/");
      }else{
        alert("Please Enter Correct details")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <h1>Login!</h1>
      <form action="" onSubmit={loginuser}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
