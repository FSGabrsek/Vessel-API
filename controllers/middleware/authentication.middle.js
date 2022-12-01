const jwt = require('jsonwebtoken');
const User = require('../../models/user.model')


module.exports = {
    async authenticate(req, res, next) {
        try {
            const authHeaders = req.headers.authorization;
            if (authHeaders) {
                const jwtBearerToken = authHeaders.substring(7);
                jwt.verify(jwtBearerToken, process.env.JWT_SECRET, async (err, decoded) => {
                    if (err) {
                        res.status(401)
                        .send({
                            status: 401,
                            msg: 'invalid token'
                        });
                    } else {
                        const user = await User.findById(decoded.sub);
                        req.headers.sub = user._id.toString();
                        next();
                    }
                });
            } else {
                res.status(401)
                .send({
                    status: 401,
                    msg: 'missing token'
                });
            }
        } catch (error) {
            next(error);
        }   
    }
}