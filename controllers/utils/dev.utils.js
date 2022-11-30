const niResponse = function name(req, res, next) {
    res
    .status(501)
    .json({
        status: 501,
        msg: 'Not implemented'
    });
}

module.exports = { niResponse }