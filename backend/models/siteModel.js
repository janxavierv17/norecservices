import mongoose from "mongoose";
const fireDamperSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    fireDamperItems: [
        {
            name: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            comments: {
                type: String,
                required: true,
            },
            isCompliant: {
                type: Boolean,
                required: true,
                default: false,
            }
        }
    ],
}, {
    timestamps: true,
})
const siteSchema = mongoose.Schema({
    // This user has a relation/connection to the USER Model
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name: {
        type: String,
        required: true,
    },
    workType: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    fireDamper: [fireDamperSchema],
    fireDamperCount: {
        type: Number,
        required: true,
        default: 0,
    }
}, {
    timestamps: true,
})

const Site = mongoose.model("Site", siteSchema)
export default Site;