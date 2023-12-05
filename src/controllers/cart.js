import Cart from "../models/Cart.js"
// import {productSchema} from "../../validation/index.js"
const getAll = async (req, res) => {
    try {       
        const data = await Cart.find()

        if(!data || data.length === 0)return res.status(404).json('Not found')
        return res.status(200).json({docs : data})
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
    
}
export const getAllByStatus = async (req, res) => {
  try {       
      const data = await Cart.find({ cartStatus : {$ne : 'Cancelled'}})

      if(!data || data.length === 0)return res.status(201).json({docs : []})
      return res.status(200).json({docs : data})
  } catch (error) {
      return res.status(500).json({
          message : error.message
      })
  }
  
}


const createCart = async (req, res) => {
  try {
    const formData = req.body      
    const createdCart = await Cart.create(formData)
      
    if(!createdCart)return res.status(404).json('Not found')

    return res.status(200).json({
      data : createdCart
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
 
    const data = await Cart.findByIdAndUpdate(id, body, { new: true})
    // Cach 2:
    // const data = await products.updateOne({_id: id}, body, { new: true})
    if (!data) return res.status(404).json("Cập nhật đơn hàng thất bại!");

    return res.status(200).json("Cập nhật đơn hàng thành công!");
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
    
   
}
const deleteCart = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const deletedCart = await Cart.findByIdAndUpdate(id, body, { new: true})

        if (!deletedCart ) return res.status(404).json("Xoá đơn hàng thất bại!");

        return res.status(200).json("Xoá đơn hàng thành công!");
      } catch (error) {
        return res.status(500).json({
          message: error.message,
        });
      }
    
   
}
const deleteCartHard = async (req, res) => {
  try {
      const id = req.params.id;
      const deletedCart = await Cart.findByIdAndDelete(id)

      if (!deletedCart ) return res.status(404).json("Xoá đơn hàng thất bại!");

      return res.status(200).json("Xoá đơn hàng thành công!");
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  
 
}

export {getAll,deleteCart,update,createCart,deleteCartHard}