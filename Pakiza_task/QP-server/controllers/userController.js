const User = require('../models/user');

const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, dateOfBirth, phoneNumber, gender } = req.body;

  try {
    const newUser = new User({ firstName, lastName, email, password, dateOfBirth, phoneNumber, gender });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser };
