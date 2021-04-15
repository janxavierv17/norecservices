import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`*** Successfully connected to NSDatabase: ${connection.connection.host} ***`.brightGreen)
    } catch (error) {
        console.log("Something went wrong with connecting to NSDatabase:", error.message.brightRed)
        process.exit(1) //Will exit with failure.
    }
}

export default connectDB;