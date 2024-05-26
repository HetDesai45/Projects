import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, [navigate]);
  const loginuser = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:5000/user/login",
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (result.data) {
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/");
      } else {
        alert("Please Enter Correct details");
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred while logging in. Please try again.");
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
