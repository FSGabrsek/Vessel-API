import { Schema } from "mongoose";

const MediaVesselSchema = new Schema({
    type: {
        type: String,
        required: [ true, 'MediaVessel property "type" is required'],
        enum: {
            values: [ 'series', 'film', 'literature' ],
            message: '"{VALUE}" is not a supported value for MediaVessel property "type"'
        }
    },
    title: {
        type: String,
        required: [ true, 'MediaVessel property "title" is required']
    },
    synopsis: {
        type: String,
        required: [ true, 'MediaVessel property "synopsis" is required']
    },
    finalLength: {
        type: Number,
        required: [ true, 'MediaVessel property "finalLength" is required']
    },
    currentLength: {
        type: Number,
        required: [ true, 'MediaVessel property "currentLength" is required']
    },
    status: {
        type: String,
        required: [ true, 'MediaVessel property "status" is required'],
        enum: {
            values: [ 'upcoming', 'airing', 'finished' ],
            message: '"{VALUE}" is not a supported value for MediaVessel property "status"'
        }
    },
    releaseDate: {
        type: Date,
        required: [ true, 'MediaVessel property "releaseDate" is required']
    },
    releaseInterval: {
        type: Date
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: [ true, 'MediaVessel property "owner" is required']
    }
});

const MediaVessel = mongoose.model("mediaVessel", MediaVesselSchema);
module.exports = MediaVessel; 