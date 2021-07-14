
const UserList = require("../modules/userList")
 
 export const getPost = async ((req,res)=>{
   try {
       res.header (
        "Access-Control-Allow-Origin", '*'
       )
       const userList = await UserList.find();

       console.log(userList);
       res.status(200).json(userList)
   } catch (error) {
       res.status(404).json({message: error.message})
   }
})

export const createPost =async ((req, res)=>{
    const post = req.body;
    
    const newPost = new UserList(post)
  try {
     await newPost.save();
     res.status(201).json(newPost)
      
  } catch (error) {
    res.status(409).json({message: error.message})
  }
})