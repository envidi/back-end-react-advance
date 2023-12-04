import User from '../models/User.js';
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config()
export const getAllUser = async (req, res) => {
    try {       
        const data = await User.find()


        if(!data || data.length === 0)return res.status(404).json('Not found')
        return res.status(200).json({docs : data})
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
    
}
export const signUp = async(req, res) => {
    try {
        // Bước 1: Kiểm tra dữ liệu người dùng
        
       // Bước 2: Email người dùng đăng ký đã tồn tại trong DB hay chưa?
       const userExist = await User.findOne({ email: req.body.email})
       if(userExist) {
           return res.status(400).json( "Email này đã được đăng ký, bạn có muốn đăng nhập không?")
       }

          // const hashPassword = bcryptjs.hashSync(req.body.password, 10)
          const hashPassword = await bcryptjs.hash(req.body.password, 10)
        
          // Bước 4: Thông báo thành công:
          const user = await User.create({
              username: req.body.username,
              email: req.body.email,
              password: hashPassword,
              role : req.body?.role
          })
          user.password = undefined
          return res.status(200).json(user)

    } catch (error) {
        return res.status(500).json({
            message: error.message || "Lỗi server!"
        })
    }
}

export const signIn = async (req, res) => {
    try {
        const {JWT_SECRET} = process.env
        const user = await User.findOne({email : req.body.email})
        if(!user){
            return res.status(400).json("Email này chưa đăng ký, bạn có muốn đăng ký không?")
        }
        const isMatch = await bcryptjs.compare(req.body.password,user.password)
        if(!isMatch){
            return res.status(400).json({
                message : "Password không đúng, vui lòng kiểm tra lại!"
            })
        }
        const accessToken = jwt.sign({
            _id : user._id
        },JWT_SECRET,{expiresIn: '3d'})
        user.password = undefined
        return res.status(200).json({
            accessToken,
            user :user,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message,
          });
    }
}
export const update = async (req, res) => {
    try {
      const id = req.params.id;
      const body = req.body;
   
      const data = await User.findByIdAndUpdate(id, body, { new: true})
      // Cach 2:
      // const data = await products.updateOne({_id: id}, body, { new: true})
      if (!data) return res.status(404).json("Cập nhật người dùng thất bại!");
  
      return res.status(200).json("Cập nhật người dùng thành công!");
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
      
     
  }
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedUser = await User.findByIdAndDelete(id)

        if (!deletedUser ) return res.status(404).json("Xoá người dùng thất bại!");

        return res.status(200).json("Xoá người dùng thành công!");
      } catch (error) {
        return res.status(500).json({
          message: error.message,
        });
      }
    
   
}
