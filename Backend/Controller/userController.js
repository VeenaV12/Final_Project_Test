const User = require('../Model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Project = require('../Model/projectModel')

const registerUser = async (req, res) => {
  const { name, email, password, phone, batchName, exitExamMark } = req.body;

  if (exitExamMark < 20) {
    return res.status(400).json({ message: 'Exit exam mark must be at least 20' });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const user = await User.create({
    name,
    email,
    password,
    phone,
    batchName,
    exitExamMark,
  });

  if (user) {
    return res.status(201).json({
     message:'Registration successful!'
    });
  } else {
    return res.status(400).json({ message: 'Invalid user data' });
  }
};



const authUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).populate('batchName');

    if (user && (await bcrypt.compare(password, user.password))) {
      // User authenticated successfully
      let token = generateToken(user._id);
      
     // req.session.user = {_id:user._id}
      

      // Check if user has selected a project
      if (user.project) {
        // User has already selected a project
        return res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          batchName:user.batchName,
          token: token,
          project:user.project,
          dashboard: '/project',  // Navigate to project dashboard
          message: "Login Successful"
        });
      } else {
        // User has not selected a project
        return res.status(200).json({
          _id: user._id,
          name: user.name,
          email: user.email,
          token: token,
          batchName:user.batchName,
          dashboard: '/student',  // Navigate to student dashboard
          message: "Login Successful"
        });
      }
    } else {
      // Invalid email or password
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Error authenticating user:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};



const getId = async (req, res) => {
  try {
    const userId = req.user.userId;
    console.log(userId) // Assuming decoded token has user ID
    return res.status(200).json({userId})

  } catch (error) {
    
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};






module.exports = { registerUser, authUser, getId};
