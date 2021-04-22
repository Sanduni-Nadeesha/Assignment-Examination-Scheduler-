const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('../validation');

//validation

router.post('/register', async (req, res) => {

    const {error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // checking if the user is already in the database
    const emailExist = await User.findOne({ email: req.body.email })
    if(emailExist) return res.status(400).send('Email already exist..');

    // hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role
    })
    try{
        const saveUser = await user.save();
        res.send({ user: user._id }).status(200);
    }catch(err){
        res.status(400).send(err)
    }
});

router.post('/login', async (req, res) => {

    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    // checking if email
    const user = await User.findOne({ email: req.body.email })
    if(!user) return res.status(400).send('No user with this email id exist..');

    //Password is correct
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Please enter your correct password..')

    // create and assign a token

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.TOKEN_SECRET);
    return res.status(200).json({ token: token, message: 'Login Successfully'})
});

module.exports = router;