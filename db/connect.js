import mongoose from 'mongoose'

const connectDB = (url)=>{
    return mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>console.log('Connect'))
}


export default connectDB