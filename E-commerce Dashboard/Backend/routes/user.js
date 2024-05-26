const { Router } = require("express");
const user = require("../model/user");

const router = Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  let result = await user.create({
    name,
    email,
    password,
  });
  result = result.toObject();
  delete result.password;
  if(result){
    return res.send(result);
  }else{
    return res.send("");
  }
});

router.post("/login", async (req, res) => {
  if (req.body.password && req.body.email) {
    const result = await user.findOne(req.body).select("-password");
    if (result) {
      res.send(result);
    }else{
      res.send("");
    }
  }else{
    res.send("");
  }
});

module.exports = router;
