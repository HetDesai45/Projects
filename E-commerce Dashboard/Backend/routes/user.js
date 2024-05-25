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
  if (result) {
    return res.json({ success: true });
  } else {
    return res.json({ success: false });
  }
});

module.exports = router;
