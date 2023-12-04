import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    category_id : { type: mongoose.Schema.Types.ObjectId, ref: 'Category',required:true },
},{timestamps:true})
productSchema.plugin(mongoosePaginate)

export default mongoose.model('Product', productSchema)