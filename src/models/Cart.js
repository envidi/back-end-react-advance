import mongoose from 'mongoose'

const cartSchema = mongoose.Schema({
    totalCost: {
        type: Number,
        required: true
    },
    id_user: {
        type: String,
        required: true
    },
    cartStatus: {
        type : String,
        required : true,
        enum : ['Pending Confirmation',
        'Processing',
        'Completed',
        'Cancelled',
        'Deleted']
    },
    carts : {
        type : [
            {
                name : String,
                price : Number,
                image : String,
                desc : String,
                id : Number,
                id_product:String,
                quantity: Number,
                id_cate:String,
                total:Number
            }
        ],
        required : true
    },
   
},{timestamps:true})

export default mongoose.model('Cart', cartSchema)