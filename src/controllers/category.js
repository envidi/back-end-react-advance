import Category from "../models/Category.js"
// import {productSchema} from "../../validation/index.js"
const getAll = async (req, res) => {
    try {

        const {_page = 1, _limit = 10 , _sort = 'createdAt',_order = 'asc'} = req.query
        const options = {
          page : _page,
          limit : _limit,
          sort : {
            [_sort ] : _order === 'asc' ? 1 : -1
          }
        }
        const data = await Category.paginate({},options)

        
        if(!data || data.length === 0)return res.status(404).json('Not found')
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
    
}
const details = async (req, res) => {
    try {
      const productOne = await Category.findById(req.params.id)
    
        if(!productOne && productOne.status !== 200){
            return res.status(404).json("Not found")
        }
        
        return res.status(200).json({
            data : productOne
        })
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
  
    
   
}

const createCategory = async (req, res) => {
  try {
    const formData = req.body      
    const createdProduct = await Category.create(formData)
      
    if(!createdProduct)return res.status(404).json('Not found')

    return res.status(200).json({
      data : createdProduct
    })

      
  } catch (error) {
      return res.status(500).json({
          message : error.message
      })
  }
     
 
}

const update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
 
    const data = await Category.findByIdAndUpdate(id, body, { new: true})
    // Cach 2:
    // const data = await products.updateOne({_id: id}, body, { new: true})
    if (!data) return res.status(404).json("Cập nhật sản phẩm thất bại!");

    return res.status(200).json("Cập nhật sản phẩm thành công!");
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
    
   
}
const deleteCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedProduct = await Category.findByIdAndDelete(id)

        if (!deletedProduct ) return res.status(404).json("Xoá sản phẩm thất bại!");

        return res.status(200).json("Xoá sản phẩm thành công!");
      } catch (error) {
        return res.status(500).json({
          message: error.message,
        });
      }
    
   
}

export {getAll,deleteCategory,update,createCategory,details}