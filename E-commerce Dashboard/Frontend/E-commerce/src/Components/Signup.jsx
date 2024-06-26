import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  },[navigate]);

  const signupuser = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post(
        "http://localhost:5000/user/signup",
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      
      if (result.data) {
        localStorage.setItem("user", JSON.stringify(result.data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong please try again later");
    }
  };
  return (
    <div className="register">
      <h1>Sign UP!</h1>
      <form action="" onSubmit={signupuser}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <br />
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
            setPass(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
