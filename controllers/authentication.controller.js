const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user.model')

const saltRounds = 5;

module.exports = {
    async register(req, res, next) {
        const props = req.body;

        props.email = props.email.toLowerCase();
        delete props._id;

        const salt = await bcrypt.genSalt(saltRounds);
        const hash = await bcrypt.hash(props.password, salt);
        props.key = hash;

        let user = new User(props);
        try {
            user = await user.save();
            if (user) {
                const jwtBearerToken = jwt.sign(
                    {
                        sub: user._id.toString(),
                        name: user.username
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '1d'
                    }
                );

                res.status(201)
                .send(
                    {
                        status: 201,
                        msg: 'User registered',
                        token: jwtBearerToken
                    }
                );
            } else {
                throw new Error('Failed to create user document');
            }
            
        } catch (error) {
            next(error);
        }
    },
    async login(req, res, next) {
        const props = req.body;

        props.email = props.email.toLowerCase();
        const user = await User.findOne({ email: props.email });
        
        if (user && await bcrypt.compare(props.password, user.key)) {
            const jwtBearerToken = jwt.sign(
                {
                    sub: user._id.toString(),
                    name: user.username
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: '1d'
                }
            );

            res.status(200)
                .send(
                    {
                        status: 201,
                        msg: 'User logged in',
                        token: jwtBearerToken
                    }
                );
        } else {
            res.status(400)
            .send(
                {
                    status: 400,
                    msg: 'Email or password is invalid'
                }
            );
        }
    }
}