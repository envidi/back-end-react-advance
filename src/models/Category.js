import mongoose from 'mongoose'
import mongoosePaginate from 'mongoose-paginate-v2'

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
  
},{timestamps:true})
categorySchema.plugin(mongoosePaginate)
export default mongoose.model('Category', categorySchema)