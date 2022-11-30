import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        required: [ true, 'User property "username" is required' ]
    },
    password: {
        type: String,
        required: [ true, 'User property "password" is required' ]
    },
    email: {
        type: String,
        required: [ true, 'User property "email" is required' ],
        unique: [ true, 'User property "email" must be unique' ]
    },
    dateOfBirth: {
        type: Date,
        required: [ true, 'User property "dateOfBirth" is required']
    }
});

const User = mongoose.model("user", UserSchema);
module.exports = User;