require('dotenv').config();

const express = require('express');
const { default: mongoose } = require('mongoose');
const { connect } = require('./routes/review.routes');

const app = express();
const port = process.env.PORT || 3000;

const reviewRoutes = require('./routes/review.routes');
const soulRoutes = require('./routes/soul.routes');
const userRoutes = require('./routes/user.routes');
const vesselRoutes = require('./routes/vessel.routes');

app.use(express.json())
app.use(reviewRoutes);
app.use(soulRoutes);
app.use(userRoutes);
app.use(vesselRoutes);

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV === 'production') {
    mongoose.connect(process.env.ATLAS_CONN_PROD).then(
        (mongoose) => {
            console.log(`[mongoose] connected to ${mongoose.connection.db.databaseName} via ${mongoose.connection.host}`);
        },
        (err) => {
            console.error(err);
        }
    );
} else {
    mongoose.connect(process.env.ATLAS_CONN_TEST).then(
        (mongoose) => {
            console.log(`[mongoose] connected to ${mongoose.connection.db.databaseName} via ${mongoose.connection.host}`);
        },
        (err) => {
            console.error(err);
        }
    );
}

// 404 error message
app.use((req, res) => {
    res.status(404)
        .json({
            status: 404,
            msg: 'endpoint not found'
        });
});

app.use((err, req, res, next) => {
    console.error(err)
    if (err.status == 500 || err.status === undefined) {
        err.status = 500
        err.message = 'the server encountered an error while handling your request'
    }
    res.status(err.status).json({status: err.status, msg: err.message});
});

app.listen(port, () => {
    console.log(`Server hosted on port: ${port}`);
});