import mongoose from "mongoose";
import bcrypt from "bcryptjs"
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }
}, {
    timestamps: true
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

// We can have things happen onSave, onFind, other methods or actions
// Does not need to be brough in userController
userSchema.pre("save", async function (next) {
    // isModified is part of mongoose
    if (!this.isModified("password")) {
        next()
    }

    // salt hashes password from bcrypt
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model("User", userSchema)
export default User;