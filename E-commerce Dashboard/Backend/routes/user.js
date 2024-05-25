const { Router } = require("express");
const user = require("../model/user");

const router = Router();

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const result = await user.create({
    name,
    email,
    password,
  });
  return res.send(result);
});

module.exports = router;
