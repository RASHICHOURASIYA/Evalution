const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Customer = require("../models/customer");
const userRouter = Router();


const { JWT_SECRET } = process.env;


userRouter.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;

 
  if (!username || !email || !password || !role) {
    return res.status(400).json({ message: "Invalid request body. Check your fields." });
  }

  try {
    
    const existingUser = await Customer.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered. Try to login." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await Customer.create({ username, email, password: hashedPassword, role });

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ user, token });
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Invalid request body. Check your fields." });
  }

  try {
  
    const user = await Customer.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Email is not registered. Try to register." });
    }

 
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid login credentials." });
    }

 
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = userRouter;
