import mongoose from 'mongoose'

const connectDB = (url)=>{
    return mongoose.connect(url).then(()=>console.log('Connect'))
}


export default connectDB