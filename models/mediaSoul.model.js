const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MediaSoulSchema = new Schema({
    progress: {
        type: Number,
        required: [ true, 'MediaSoul property "progress" is required']
    },
    lastModified: {
        type: Date,
        required: [ true, 'MediaSoul property "lastModified" is required']
    },
    vessel: {
        type: Schema.Types.ObjectId,
        ref: 'mediaVessel',
        required: [ true, 'MediaSoul property "vessel" is required']
    },
    review: {
        type: ReviewSchema
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [ true, 'MediaSoul property "owner" is required']
    }
});

const ReviewSchema = new Schema({
    rating: {
        type: String,
        required: [ true, 'Review property "rating" is required' ],
        enum: {
            values: [ '+', '~', '-'],
            message: '"{VALUE}" is not a supported value for Review property "rating"'
        }
    },
    content: {
        type: String,
        required: [ true, 'Review property "content" is required' ]
    },
    lastModified: {
        type: Date,
        required: [ true, 'Review property "lastModified" is required']
    },
});

const MediaSoul = mongoose.model("mediaSoul", MediaSoulSchema);
module.exports = MediaSoul;