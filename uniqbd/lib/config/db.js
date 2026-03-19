import mongoose from "mongoose"

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://Juthi:Nowsin225980@cluster0.owdquef.mongodb.net/NextJs')
    console.log("DB Connected")
}