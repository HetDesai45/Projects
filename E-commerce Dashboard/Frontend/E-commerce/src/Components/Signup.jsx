import { useState } from "react";

const Signup = () =>{
  const [name,setName] = useState("");
  const [pass,setPass] = useState("");
  const [email,setEmail] = useState("");
  return(
    <div className="signup">
      <h1>Sign UP!</h1>
      <form action="">
        <input type="text" name="name" placeholder="Enter Name" value={name} onChange={(e)=>{ setName(e.target.value)}}/><br /><br />
        <input type="email" name="email" placeholder="Enter Email ID" value={email} onChange={(e)=>{ setEmail(e.target.value)}}/><br /><br />
        <input type="password" name="pass" placeholder="Enter Password" value={pass} onChange={(e)=>{ setPass(e.target.value)}}/><br /><br />
        <button type="submit">Signup</button>
      </form>
    </div>
  )
}

export default Signup;